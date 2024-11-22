import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link NavigateButtons} component
 */
export interface NavigateButtonsContent extends BaseParentContent {
    readonly type  : ContentType.NAVIGATE_BUTTONS;
    readonly backUrl: string;
    readonly forwardUrl: string;
    readonly alterBack?: string;
    readonly alterForward?: string;
}

/**
 * Returns true if the value is NavigateButtons
 *
 * @param value
 */
export function isNavigateButtonsContent ( value: unknown) : value is NavigateButtonsContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.NAVIGATE_BUTTONS
    );
}
