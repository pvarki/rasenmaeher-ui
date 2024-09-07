import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link FoldableCard} component
 */
export interface FoldableCardContent extends BaseParentContent {
    readonly type      : ContentType;
    readonly title     : string;
    readonly image    ?: string;
    readonly body     ?: Content | readonly Content[];
}

/**
 * Returns true if the value is FoldableCard
 *
 * @param value
 */
export function isFoldableCardContent (value: unknown) : value is FoldableCardContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.FOLDABLE_CARD
        && typeof (value as unknown as {[key: string]: string})?.title === "string"
        && (typeof (value as unknown as {[key: string]: string})?.image === "string" || (value as unknown as {[key: string]: string}).image === undefined)
    );
}
