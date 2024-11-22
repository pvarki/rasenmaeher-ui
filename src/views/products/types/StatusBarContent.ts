import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link StatusBar} component
 */
export interface StatusBarContent extends BaseParentContent {
    readonly type  : ContentType.STATUS_BAR;
    readonly title: string;
    readonly progressMax: string;
    readonly progressNow: string;
}

/**
 * Returns true if the value is StatusBar
 *
 * @param value
 */
export function isStatusBarContent ( value: unknown) : value is StatusBarContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.STATUS_BAR
    );
}
