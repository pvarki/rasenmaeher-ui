import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link ServiceProductUsageCard} component
 */
export interface ServiceProductUsageCardContent extends BaseParentContent {
    readonly type      : ContentType;
    readonly title     : string;
    readonly content  ?: Content | readonly Content[];
    readonly body     ?: Content | readonly Content[];
}

/**
 * Returns true if the value is ServiceProductUsageCardContent
 *
 * @param value
 */
export function isServiceProductUsageCardContent (value: unknown) : value is ServiceProductUsageCardContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.SERVICE_PRODUCT_USAGE_CARD
        && typeof (value as unknown as {[key: string]: string})?.title === "string"
        && (typeof (value as unknown as {[key: string]: string})?.image === "string" || (value as unknown as {[key: string]: string}).image === undefined)
    );
}
