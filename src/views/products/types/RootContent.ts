import {
    BaseContent,
    isBaseContent,
} from "./BaseContent";
import { ContentType } from "./ContentType";

/**
 * Top-level content type (when it's an object, not a string).
 * These are usually views or modals.
 */
export interface RootContent extends BaseContent {
    readonly type : ContentType;
    readonly name : string;
    readonly lang : string;
}

/**
 * Returns true if the value is BaseContent.
 *
 * @param value
 */
export function isRootContent ( value: unknown) : value is RootContent {
    return (
        isBaseContent(value)
        && typeof ((value as unknown as {[key: string]: string})?.lang) === "string"
    );
}
