import {
    BaseContent,
    isBaseContent,
} from "./BaseContent";
import {
    ContentType,
    isContentType,
} from "./ContentType";

/**
 * Top-level content type (when it's an object, not a string).
 * These are usually views or modals.
 */
export interface RootContent extends BaseContent {
    readonly type : ContentType;
    readonly name : string;
}

/**
 * Returns true if the value is BaseContent.
 *
 * @param value
 */
export function isRootContent ( value: unknown) : value is RootContent {
    return (
        isBaseContent(value)
        && isContentType((value as unknown as {[key: string]: string})?.type)
        && typeof ((value as unknown as {[key: string]: string})?.name) === "string"
    );
}
