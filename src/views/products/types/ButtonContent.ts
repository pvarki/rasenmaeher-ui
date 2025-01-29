import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link Button} component
 */
export interface ButtonContent extends BaseParentContent {
    readonly type      : ContentType;

    /**
     * This will go to the "styles" property
     */
    readonly classes  ?: readonly string[];

    readonly onClick ?: {
        readonly navigate ?: string;
        readonly modal ?: string;
    };

    readonly body     ?: Content | readonly Content[];
}

/**
 * Returns true if the value is Button
 *
 * @param value
 */
export function isButtonContent (value: unknown) : value is ButtonContent {
    return (
        isBaseParentContent(value)
        && value?.type === ContentType.BUTTON
    );
}
