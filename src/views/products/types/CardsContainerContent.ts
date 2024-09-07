import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link CardsContainer} component
 */
export interface CardsContainerContent extends BaseParentContent {
    readonly type  : ContentType;
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
        && value.type === ContentType.CARDS_CONTAINER
    );
}
