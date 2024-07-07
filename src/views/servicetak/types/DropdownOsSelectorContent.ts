import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link DropdownOsSelector} component
 */
export interface DropdownOsSelectorContent extends BaseParentContent {
    readonly type      : ContentType;
    readonly title     : string;
    readonly image    ?: string;
    readonly body     ?: Content | readonly Content[];
}

/**
 * Returns true if the value is DropdownOsSelector
 *
 * @param value
 */
export function isDropdownOsSelectorContent (value: unknown) : value is DropdownOsSelectorContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.DROPDOWN_OS_SELECTOR
        && typeof (value as unknown as {[key: string]: string})?.title === "string"
        && (typeof (value as unknown as {[key: string]: string})?.image === "string" || (value as unknown as {[key: string]: string}).image === undefined)
    );
}
