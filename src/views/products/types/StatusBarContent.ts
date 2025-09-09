import {
    BaseParentContent,
    isBaseParentContent,
} from "../../../libs/rune/types/BaseParentContent";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link StatusBar} component
 */
export interface StatusBarContent extends BaseParentContent {
    readonly type  : RmContentType.STATUS_BAR | string;
    readonly title ?: string;
    readonly progressMax ?: string;
    readonly progressNow ?: string;
}

/**
 * Returns true if the value is StatusBar
 *
 * @param value
 */
export function isStatusBarContent ( value: unknown) : value is StatusBarContent {
    return (
        isBaseParentContent(value)
        && value.type === RmContentType.STATUS_BAR
    );
}
