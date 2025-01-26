import {
    getOperatingSystem,
    OperatingSystem,
} from "../../hook/helpers/getOperatingSystem";
import {
    PublicEventCallback,
    PublicEventDestructor,
} from "./ProductContentService";

enum ContentEvent {
    DROPDOWN_OS_SELECTOR_CHANGE,
}

interface EventCallbackFunction {
    (type: ContentEvent) : void;
}

export interface DownloadOptionsService {

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

}


/**
 * @inheritDoc
 */
export class DownloadOptionsServiceImpl implements DownloadOptionsService {

    protected _eventCallbacks : EventCallbackFunction[];
    protected _selectedOS : OperatingSystem;

    protected constructor () {
        this._eventCallbacks = [];
        this._selectedOS = getOperatingSystem();
    }

    /**
     * Create service instance
     */
    public static create () : DownloadOptionsService {
        return new DownloadOptionsServiceImpl();
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

}
