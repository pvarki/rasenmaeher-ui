import { RmContentType } from "./RmContentType";
import {
  BaseParentContent,
  isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";

/**
 * Defines dynamic content DTO for {@link Step} component
 */
export interface StepContent extends BaseParentContent {
  readonly type: RmContentType.STEP | string;
  readonly image?: string;
  readonly imageLink?: string;
  readonly imageClasses?: readonly string[];
  readonly description?: Content | readonly Content[];
  readonly note?: Content | readonly Content[];
}

/**
 * Returns true if the value is Step
 *
 * @param value
 */
export function isStepContent(value: unknown): value is StepContent {
  return isBaseParentContent(value) && value?.type === RmContentType.STEP;
}
