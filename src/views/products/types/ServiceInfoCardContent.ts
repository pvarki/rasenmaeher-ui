import { isRegularObject } from "../../../libs/rune/helpers/isRegularObject";
import { isStringOrUndefined } from "../../../libs/rune/helpers/isString";
import {
  BaseParentContent,
  isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link ServiceInfoCard} component
 */
export interface ServiceInfoCardContent extends BaseParentContent {
  readonly type: RmContentType.SERVICE_INFO_CARD | string;
  readonly title?: Content | readonly Content[];
  readonly image?: string;
  readonly details?: Content | readonly Content[];
  readonly body?: Content | readonly Content[];
}

/**
 * Returns true if the value is ServiceInfoCard
 *
 * @param value
 */
export function isServiceInfoCardContent(
  value: unknown,
): value is ServiceInfoCardContent {
  return (
    isBaseParentContent(value) &&
    isRegularObject(value) &&
    value.type === RmContentType.SERVICE_INFO_CARD &&
    isStringOrUndefined(value?.image)
  );
}
