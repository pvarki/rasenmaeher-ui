import { RmContentType } from "./RmContentType";
import {
  BaseParentContent,
  isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";
import { ContentType } from "../../../libs/rune/types/ContentType";

/**
 * Defines dynamic content DTO for {@link Button} component
 */
export interface ButtonContent extends BaseParentContent {
  readonly type: RmContentType.BUTTON | RmContentType | ContentType | string;

  /**
   * This will go to the "styles" property
   */
  readonly classes?: readonly string[];

  readonly onClick?: {
    readonly navigate?: string;
    readonly modal?: string;
  };

  readonly body?: Content | readonly Content[];
}

/**
 * Returns true if the value is Button
 *
 * @param value
 */
export function isButtonContent(value: unknown): value is ButtonContent {
  return isBaseParentContent(value) && value?.type === RmContentType.BUTTON;
}
