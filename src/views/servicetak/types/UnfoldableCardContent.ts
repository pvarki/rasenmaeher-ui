import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";
import { StepContent } from "./StepContent";

/**
 * Defines dynamic content DTO for {@link UnfoldableCard} component.
 * Note, is must be from the UnfoldableCard2.tsx!
 */
export interface UnfoldableCardContent extends BaseParentContent {
    readonly type         : ContentType;
    readonly title        : Content | readonly Content[];
    readonly steps       ?: readonly StepContent[];
    readonly content     ?: Content | readonly Content[];
    readonly body        ?: Content | readonly Content[];

    /**
     * This implements the `styling` property on the component
     */
    readonly classes     ?: readonly string[];

    readonly initialOpen ?: boolean;
}

/**
 * Returns true if the value is UnfoldableCard
 *
 * @param value
 */
export function isUnfoldableCardContent (value: unknown) : value is UnfoldableCardContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.UNFOLDABLE_CARD
        && typeof (value as unknown as {[key: string]: string})?.title === "string"
        && (typeof (value as unknown as {[key: string]: string})?.image === "string" || (value as unknown as {[key: string]: string}).image === undefined)
    );
}
