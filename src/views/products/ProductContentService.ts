import {
    getOperatingSystem,
    OperatingSystem,
} from "../../hook/helpers/getOperatingSystem";
import {
    RootContent,
    isRootContent,
} from "./types/RootContent";
import { Content } from "./types/Content";
import {
    ContentType,
} from "./types/ContentType";
import {
    TranslationCollection,
} from "./types/TranslationCollection";
import {
    isTranslationContent,
} from "./types/TranslationContent";
import { TranslationData } from "./types/TranslationData";
import {
    isViewContent,
    ViewContent,
} from "./types/ViewContent";

export interface PublicEventCallback {
    (): void;
}

export interface PublicEventDestructor {
    (): void;
}

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

    /**
     *
     * @param value
     */
    setSelectedOS (value: OperatingSystem) : void;

    /**
     *
     */
    getSelectedOS () : OperatingSystem;

    /**
     *
     * @param f
     */
    addDropdownOsSelectorChangeListener ( f: PublicEventCallback ) : PublicEventDestructor;

    /**
     * Returns dynamic translations from the product content JSON
     */
    getTranslations (lang: string) : TranslationData;

}

enum ContentEvent {
    DROPDOWN_OS_SELECTOR_CHANGE,
}

interface EventCallbackFunction {
    (type: ContentEvent) : void;
}

/**
 * @inheritDoc
 */
export class ProductContentServiceImpl implements ProductContentService {

    protected _items : readonly Content[];
    protected _eventCallbacks : EventCallbackFunction[];
    protected _selectedOS : OperatingSystem;

    protected constructor (
        items: readonly Content[],
    ) {
        this._items = items;
        this._eventCallbacks = [];
        this._selectedOS = getOperatingSystem();
    }

    protected _triggerEvent (type: ContentEvent) : void {
        this._eventCallbacks.forEach((item : EventCallbackFunction) : void => {
            try {
                item(type);
            } catch (err) {
                console.warn(`Warning! Exception in event handler: `, err);
            }
        });
    }

    protected _addListener (f: EventCallbackFunction) : void {
        this._eventCallbacks.push(f);
    }

    protected _removeListener (f: EventCallbackFunction) : void {
        this._eventCallbacks = this._eventCallbacks.filter(
            (item : EventCallbackFunction) : boolean => item !== f
        );
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

    /**
     * Add an event listener for {@link DropdownOsSelector} component when used
     * by {@link ProductContentRenderer}.
     *
     * Use `getSelectedOS()` to get the state after an event.
     * Use `setSelectedOS()` to trigger the event.
     *
     * @inheritDoc
     */
    public addDropdownOsSelectorChangeListener ( f: PublicEventCallback ) : PublicEventDestructor {

        const c = (type: ContentEvent) : void => {
            if (type === ContentEvent.DROPDOWN_OS_SELECTOR_CHANGE) {
                f();
            }
        };

        this._addListener(c);

        return () : void => this._removeListener(c);
    }

    /**
     * @inheritDoc
     */
    public setSelectedOS (value: OperatingSystem) : void {
        if (this._selectedOS !== value) {
            this._selectedOS = value;
            this._triggerEvent(ContentEvent.DROPDOWN_OS_SELECTOR_CHANGE);
        }
    }

    /**
     * @inheritDoc
     */
    public getSelectedOS () : OperatingSystem {
        return this._selectedOS;
    }

    public _getTranslations () : TranslationCollection {
        let ret : TranslationCollection = {};
        this._items.forEach((item: Content): void => {
            if (isTranslationContent(item)) {
                Object.keys(item.data).forEach((lang: string): void => {
                    if (Object.prototype.hasOwnProperty.call(ret, lang)) {
                        ret = {
                            ...ret,
                            [lang]: {
                                ...ret[lang],
                                ...item.data[lang],
                            }
                        };
                    } else {
                        ret = {
                            ...ret,
                            [lang]: item.data[lang]
                        };
                    }
                });
                ret = {...ret, ...item.data};
            }
        });
        return ret;
    }

    public getTranslations (lang: string) : TranslationData {
        const translations = this._getTranslations();
        return Object.prototype.hasOwnProperty.call(translations, lang) ? translations[lang] : {};
    }

}
