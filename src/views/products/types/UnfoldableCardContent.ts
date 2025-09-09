import { isRegularObject } from "../../../libs/rune/helpers/isRegularObject";
import {
    isString,
    isStringOrUndefined,
} from "../../../libs/rune/helpers/isString";
import {
    BaseParentContent,
    isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";
import { StepContent } from "./StepContent";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link UnfoldableCard} component.
 * Note, is must be from the UnfoldableCard2.tsx!
 */
export interface UnfoldableCardContent extends BaseParentContent {
    readonly type         : RmContentType.UNFOLDABLE_CARD | string;
    readonly title       ?: Content | readonly Content[];
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
        && isRegularObject(value)
        && value?.type === RmContentType.UNFOLDABLE_CARD
        && isString(value?.title)
        && isStringOrUndefined(value?.image)
    );
}
