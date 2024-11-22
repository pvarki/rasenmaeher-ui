import { ReactNode } from "react";
import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link Card} component
 */
export interface CardContent extends BaseParentContent {
    readonly type  : ContentType.CARD;
    readonly body ?: Content | readonly Content[];
    readonly title : Content | readonly Content[];
    readonly details ?: Content | readonly Content[];
    readonly image ?: string;
    readonly url ?: string;
}

/**
 * Defines dynamic content DTO for {@link Card} component
 */
export interface CardContentProps {
    readonly title : ReactNode;
    readonly details ?: ReactNode;
    readonly image ?: string;
    readonly url ?: string;
}

/**
 * Returns true if the value is Card
 *
 * @param value
 */
export function isCardContent ( value: unknown) : value is CardContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.CARD
    );
}
