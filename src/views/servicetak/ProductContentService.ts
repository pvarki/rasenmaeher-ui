import {
    RootContent,
    isRootContent,
} from "./types/RootContent";
import { Content } from "./types/Content";
import {
    ContentType,
} from "./types/ContentType";
import {
    isViewContent,
    ViewContent,
} from "./types/ViewContent";

/**
 * A service to manage dynamic product specific content from integration service.
 */
export interface ProductContentService {

    /**
     * Initialize the service with some data.
     *
     * @param items
     */
    setContent (items: readonly Content[]) : void;

    /**
     * Fetch a view by name.
     *
     * @param name
     */
    getView(name: string) : ViewContent | undefined;

    /**
     * Fetch any top-level item by name and optional type.
     *
     * @param name
     * @param type
     */
    getItem(name: string, type ?: ContentType) : RootContent | undefined;

}

/**
 * @inheritDoc
 */
export class ProductContentServiceImpl implements ProductContentService {

    protected _items : readonly Content[];

    protected constructor (
        items: readonly Content[],
    ) {
        this._items = items;
    }

    /**
     * Create service instance
     */
    public static create (
        items ?: readonly Content[],
    ) : ProductContentService {
        return new ProductContentServiceImpl(items ?? []);
    }

    /**
     * @inheritDoc
     */
    public setContent (items: readonly Content[]) : void {
        this._items = items;
    }

    /**
     * @inheritDoc
     */
    public getView (name: string) : ViewContent | undefined {
        return this._items.find((item : Content) => {
            return (
                isViewContent(item)
                && item.name === name
            );
        }) as ViewContent | undefined;
    }

    /**
     * @inheritDoc
     */
    public getItem(name: string, type ?: ContentType) : RootContent | undefined {

        if (type) {
            return this._items.find((item : Content) => {
                return (
                    isRootContent(item)
                    && item.name === name
                    && item.type === type
                );
            }) as RootContent | undefined;
        }

        return this._items.find((item : Content) => {
            return (
                isRootContent(item)
                && item.name === name
            );
        }) as RootContent | undefined;

    }

}
