import {
    BaseParentContent,
    isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { Content } from "../../../libs/rune/types/Content";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link CardsContainer} component
 */
export interface CardsContainerContent extends BaseParentContent {
    readonly type  : RmContentType.CARDS_CONTAINER | string;
    readonly body ?: Content | readonly Content[];
}

/**
 * Returns true if the value is CardsContainer
 *
 * @param value
 */
export function isCardsContainerContent ( value: unknown) : value is CardsContainerContent {
    return (
        isBaseParentContent(value)
        && value.type === RmContentType.CARDS_CONTAINER
    );
}
