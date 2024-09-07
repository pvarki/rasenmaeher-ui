import { ContentType } from "./ContentType";

/**
 * Base content type (e.g. when it's an object, not a string)
 */
export interface BaseContent {
    readonly type     : ContentType;
    readonly classes ?: readonly string[];
}

/**
 * Returns true if the value is BaseContent.
 *
 * @param value
 */
export function isBaseContent ( value: unknown) : value is BaseContent {
    return (
        !!value
        && (typeof value === 'object')
        && typeof ((value as unknown as {[key: string]: string})?.type) === "string"
    );
}
