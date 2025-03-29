import LIVELOG_CONTENT from "./data/livelog.json";
import TAK_CONTENT from "./data/tak.json";
import { DownloadOptionsServiceImpl } from "./DownloadOptionsService";
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

const TAK_SERVICE_NAME = 'tak';
const LIVELOG_SERVICE_NAME = 'livelog';

const EMPTY_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create('__empty', [] );

const TAK_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create(
    TAK_SERVICE_NAME,
    [
        ...TAK_CONTENT as Content[],
    ]
);

const LIVELOG_CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create(
    LIVELOG_SERVICE_NAME,
    [
        ...LIVELOG_CONTENT as Content[],
    ]
);

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
    getContentService (name : string) : ProductContentService;

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

    private static _state : ContentServiceState = ContentServiceState.UNINITIALIZED;
    private static _productChangedListeners: ObservableListener<ContentServiceEvent.PRODUCTS_CHANGED>[] = [];
    private static _currentProducts : readonly string[] = [];

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
    public static getContentService (name : string) : ProductContentService {
        if (this._state === ContentServiceState.UNINITIALIZED) {
            this._startInitialization();
        }

        switch (name) {
            case TAK_SERVICE_NAME: return TAK_CONTENT_SERVICE;
            case LIVELOG_SERVICE_NAME: return LIVELOG_CONTENT_SERVICE;
            default : return EMPTY_CONTENT_SERVICE;
        }
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

        // FIXME: Simulates HTTP request to get products
        setTimeout( () => {
            try {
                this._updateProducts([
                    TAK_SERVICE_NAME,
                    LIVELOG_SERVICE_NAME,
                ]);
            } catch (err) {
                console.error('Error initializing content service: ', err);
                this._state = ContentServiceState.ERROR;
            }
        }, 5000);

    }

    /**
     * Update the current products and notify listeners
     * @param products New list of products
     */
    private static _updateProducts(products: readonly string[]) {
        console.log('Updating products: ', products);
        this._currentProducts = products;
        this._state = ContentServiceState.READY;
        this._notifyProductsChanged();
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

}
