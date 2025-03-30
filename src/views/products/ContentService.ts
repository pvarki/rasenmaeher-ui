import { DownloadOptionsServiceImpl } from "./DownloadOptionsService";
import {
    isProductDTO,
    ProductDTO,
} from "./dto/ProductDTO";
import {
    isProductHealthCheckDTO,
    ProductHealthCheckDTO,
} from "./dto/ProductHealthCheckDTO";
import {
    isProductListDTO,
    ProductListDTO,
} from "./dto/ProductListDTO";
import {
    ObservableDestructor,
    ObservableListener,
    ObservableService,
} from "./ObservableService";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import { Content } from "./types/Content";

/**
 * Timeout for requests (ms)
 */
const API_ENDPOINT_REQUEST_TIMEOUT = 30000;

/**
 * Time to wait before retrying a failed request (ms)
 */
const API_ENDPOINT_RETRY_TIME = 5000;

/**
 * Time to wait before retrying a health check request (ms)
 */
const API_UNHEALTHY_ENDPOINT_WAIT_TIME = 5000;

const PRODUCT_LIST_API_ENDPOINT = (product : string) : string => `/api/v1/instructions/${encodeURIComponent(product)}/en`;
const PRODUCT_API_ENDPOINT = '/api/v1/descriptions/en';
const PRODUCT_API_HEALTHCHECK_ENDPOINT = '/api/v1/healthcheck/services';

const EMPTY_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create('__empty', [] );

export const DOWNLOAD_OPTIONS_SERVICE = DownloadOptionsServiceImpl.create();

export enum ContentServiceEvent {
    PRODUCTS_CHANGED = 'ContentService:productsChanged',
}

enum ContentServiceState {
    UNINITIALIZED,
    INITIALIZING,
    READY,
    ERROR = 3,
}

export interface IContentService extends ObservableService<ContentServiceEvent> {

    /**
     * Returns all available products.
     */
    getAllProducts () : readonly string[];

    /**
     * Check if the content service is ready
     */
    isReady () : boolean;

    /**
     * Check if the content service has had an error in initialization
     */
    hasError () : boolean;

    /**
     * Trigger service initialization if the service has not started initializing
     */
    initialize () : void;

    /**
     * Returns the content service for the given product name.
     * @param name
     */
    getProductContentService ( name : string) : ProductContentService;

    /**
     * Returns the current products.
     */
    getCurrentProducts () : readonly string[];

    /**
     * Add a listener for products changed events
     * @param event Event to remove listener from
     * @param listener Callback function to be called when products change
     */
    addEventListener(event: ContentServiceEvent, listener: ObservableListener<ContentServiceEvent>) : ObservableDestructor;

}

/**
 * Singleton content service
 */
export class ContentService {

    /**
     *
     * @private
     */
    private static _retryFailedLoadTimeout : number | NodeJS.Timeout | undefined = undefined;

    private static _health : ProductHealthCheckDTO | undefined;
    private static _state : ContentServiceState = ContentServiceState.UNINITIALIZED;
    private static _productChangedListeners: ObservableListener<ContentServiceEvent.PRODUCTS_CHANGED>[] = [];
    private static _currentProducts : readonly string[] = [];
    private static _productContentServices : Map<string, ProductContentService> = new Map();

    /**
     * Check if the content service is ready
     */
    public static isReady () : boolean {
        return this._state === ContentServiceState.READY;
    }

    /**
     * Check if the content service has had an error in initialization
     */
    public static hasError () : boolean {
        return this._state === ContentServiceState.ERROR;
    }

    /**
     * Get the singleton instance of the content service
     */
    public static getSingleton () : IContentService {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }
        return this;
    }

    /**
     * Add a listener for products changed events
     * @param event Event to remove listener from
     * @param listener Callback function to be called when products change
     */
    public static addEventListener(event: ContentServiceEvent, listener: ObservableListener<ContentServiceEvent>) : ObservableDestructor {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }

        if (event === ContentServiceEvent.PRODUCTS_CHANGED) {
            this._productChangedListeners.push(listener);
            return () => {
                this._removeEventListener(ContentServiceEvent.PRODUCTS_CHANGED, listener);
            };
        }
        return () => {
            // Do nothing
        };
    }

    /**
     * Returns all available products.
     */
    public static getAllProducts () : readonly string[] {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }

        return ContentService._currentProducts;
    }

    /**
     * Returns the current products.
     */
    public static getCurrentProducts () : readonly string[] {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }

        return ContentService._currentProducts;
    }

    /**
     * Returns the content service for the given product name.
     * @param name
     */
    public static getProductContentService (name : string) : ProductContentService {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }

        return this._productContentServices.get(name) || EMPTY_CONTENT_SERVICE;
    }

    /**
     * Trigger service initialization if uninitialized
     */
    public static initialize () : void {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }
    }

    /**
     * Remove a listener for products changed events
     * @param event Event to remove listener from
     * @param listener Callback function to be removed
     */
    private static _removeEventListener(event: ContentServiceEvent, listener: ObservableListener<ContentServiceEvent>) {
        if (event === ContentServiceEvent.PRODUCTS_CHANGED) {
            this._productChangedListeners = this._productChangedListeners.filter( l => l !== listener );
        }
    }

    /**
     * Initialize the content service
     * @private
     */
    private static _startInitialization () {
        console.log('Initializing content service');
        this._state = ContentServiceState.INITIALIZING;
        try {
            this._initialize().catch((err) => {
                console.error('Error initializing content service: ', err);
                this._state = ContentServiceState.ERROR;
            });
        } catch (err) {
            console.error('Error initializing content service: ', err);
            this._state = ContentServiceState.ERROR;
        }
    }

    /**
     * Initialize the content service
     * @private
     */
    private static async _initialize () {
        const productsTask = this._loadProductList();
        const healthTask = this._loadProductHealthCheck();
        const products = await productsTask;
        const health = await healthTask;

        console.log('Products: ', products);
        console.log('Health: ', health);
        this._health = health;

        const productNames = products.map( ( product ) => product.shortname );
        const allProductsInHealthyApi = Object.keys(health.products);

        const allUniqueProducts = Array.from(new Set([...productNames, ...allProductsInHealthyApi]));

        await this._loadProductsByNames(allUniqueProducts);

        this._state = ContentServiceState.READY;
        this._notifyProductsChanged();

    }

    private static async _updateHealth () {
        try {
            this._health = await this._loadProductHealthCheck();
        } catch (err) {
            console.error("Error in API health check: ", err);
            this._health = undefined;
        }
    }

    private static async _loadAndSetProduct(name : string) {

        if (!this._health?.products[name]) {
            await wait(API_UNHEALTHY_ENDPOINT_WAIT_TIME);
            console.warn(`Product has non healthy API: ${name}`);
            return;
        }
        console.log(`Product is healthy: ${name}`);

        const product = await this._loadProduct( name );
        console.log(`Product data: ${name}: ${JSON.stringify(product)}`);
        const content = this._loadProductContent(name, product);
        console.log(`Product content data: ${name}: ${JSON.stringify(content)}`);
        this._productContentServices.set( name, ProductContentServiceImpl.create(name, content) );

        this._currentProducts = [
          ...this._currentProducts,
          name
        ];
        this._notifyProductsChanged();

    }

    private static async _loadProductsByNames (names : readonly string[]) {

        await this._updateHealth();

        console.log('Loading products: ', names);
        const failed : string[] = [];
        const tasks = names.map( (name: string) : Promise<void> => this._loadAndSetProduct(name).catch(err => {
            failed.push(name);
            throw err;
        }) );

        for (const task of tasks) {
            try {
                await task;
            } catch (err) {
                console.log("Error loading product: ", err);
            }
        }

        // Schedule failed tasks for retry
        if (failed.length > 0) {
            console.log('Scheduling retry for failed products: ', failed);
            if (this._retryFailedLoadTimeout !== undefined) {
                clearTimeout(this._retryFailedLoadTimeout);
                this._retryFailedLoadTimeout = undefined;
            }
            this._retryFailedLoadTimeout = setTimeout(() => {
                console.warn('Retrying failed products: ', failed);
                this._loadProductsByNames(failed).catch(err => {
                    console.error('Error loading failed products: ', err);
                });
            }, API_ENDPOINT_RETRY_TIME);
        }

    }

    /**
     * Notify listeners that products have changed
     * @private
     */
    private static _notifyProductsChanged() {
        this._productChangedListeners.forEach(listener => {
            try {
                listener(ContentServiceEvent.PRODUCTS_CHANGED);
            } catch (err) {
                console.error('Error notifying listener: ', err);
            }
        });
    }

    private static async _loadProductList () : Promise<ProductListDTO> {
        return await this._loadJsonResource<ProductListDTO>( PRODUCT_API_ENDPOINT, isProductListDTO );
    }

    private static async _loadProductHealthCheck () : Promise<ProductHealthCheckDTO> {
        return await this._loadJsonResource<ProductHealthCheckDTO>( PRODUCT_API_HEALTHCHECK_ENDPOINT, isProductHealthCheckDTO );
    }

    private static async _loadJsonResource<T> (endpoint: string, isDTO : ((obj: unknown) => obj is T ) ) : Promise<T> {
        const response = await fetch(
          endpoint,
          { signal: AbortSignal.timeout(API_ENDPOINT_REQUEST_TIMEOUT) }
        );
        const data = await response.json() as unknown;
        if (!isDTO(data)) {
            console.error(`Invalid data received from server at ${endpoint}: ${JSON.stringify(data)}`);
            throw new TypeError(`Invalid data received from server from ${endpoint}`);
        }
        return data;
    }

    private static async _loadProduct (name : string) : Promise<ProductDTO> {
        return await this._loadJsonResource<ProductDTO>( PRODUCT_LIST_API_ENDPOINT(name), isProductDTO );
    }

    private static _loadProductContent (name : string, product: ProductDTO) : readonly Content[] {
        try {
            const instructions : string | readonly Content[] = product.instructions;
            if (isArray(instructions)) {
                return instructions;
            }

            const content : unknown = JSON.parse(instructions);
            if (!isArray(content)) {
                console.error(`Invalid content data for ${name}: ${JSON.stringify(content)}`);
                return [];
            }
            return content as readonly Content[];
        } catch (err) {
            console.error(`Error loading product content for ${name}: `, err);
            return [];
        }
    }

}

function isArray (obj: unknown) : obj is readonly unknown[] {
    return Array.isArray(obj);
}

function wait (ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
