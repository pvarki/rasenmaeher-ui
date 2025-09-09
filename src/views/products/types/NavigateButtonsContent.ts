import {
    BaseParentContent,
    isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link NavigateButtons} component
 */
export interface NavigateButtonsContent extends BaseParentContent {
    readonly type  : RmContentType.NAVIGATE_BUTTONS | string;
    readonly backUrl ?: string;
    readonly forwardUrl ?: string;
    readonly alterBack ?: string;
    readonly alterForward ?: string;
}

/**
 * Returns true if the value is NavigateButtons
 *
 * @param value
 */
export function isNavigateButtonsContent ( value: unknown) : value is NavigateButtonsContent {
    return (
        isBaseParentContent(value)
        && value.type === RmContentType.NAVIGATE_BUTTONS
    );
}
