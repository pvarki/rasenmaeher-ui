import { ReactNode } from "react";
import {
  BaseParentContent,
  isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link Card} component
 */
export interface CardContent extends BaseParentContent {
  readonly type: RmContentType.CARD | string;
  readonly body?: Content | readonly Content[];
  readonly title?: Content | readonly Content[];
  readonly details?: Content | readonly Content[];
  readonly image?: string;
  readonly url?: string;
}

/**
 * Defines dynamic content DTO for {@link Card} component
 */
export interface CardContentProps {
  readonly title: ReactNode;
  readonly details?: ReactNode;
  readonly image?: string;
  readonly url?: string;
}

/**
 * Returns true if the value is Card
 *
 * @param value
 */
export function isCardContent(value: unknown): value is CardContent {
  return isBaseParentContent(value) && value.type === RmContentType.CARD;
}
