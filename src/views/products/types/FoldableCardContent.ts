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
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link FoldableCard} component
 */
export interface FoldableCardContent extends BaseParentContent {
  readonly type: RmContentType.FOLDABLE_CARD | string;
  readonly title?: string;
  readonly image?: string;
  readonly body?: Content | readonly Content[];
}

/**
 * Returns true if the value is FoldableCard
 *
 * @param value
 */
export function isFoldableCardContent(
  value: unknown,
): value is FoldableCardContent {
  return (
    isBaseParentContent(value) &&
    isRegularObject(value) &&
    value?.type === RmContentType.FOLDABLE_CARD &&
    isString(value?.title) &&
    isStringOrUndefined(value?.image)
  );
}
