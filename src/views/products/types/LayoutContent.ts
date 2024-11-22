import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines layout content type
 */
export interface LayoutContent extends BaseParentContent {
    readonly type  : ContentType.LAYOUT;
    readonly body ?: Content | readonly Content[];
    readonly showNavbar       ?: boolean;
    readonly showHeader       ?: boolean;
    readonly showFooter       ?: boolean;
    readonly showPublicFooter ?: boolean;
    readonly navbarTitle      ?: Content | readonly Content[];
    readonly backUrl          ?: string;
    readonly heroImage        ?: string;
}

/**
 * Defines layout content type
 */
export interface LayoutContentProps {
    readonly showNavbar       ?: boolean;
    readonly showHeader       ?: boolean;
    readonly showFooter       ?: boolean;
    readonly showPublicFooter ?: boolean;
    readonly navbarTitle      ?: React.ReactNode;
    readonly backUrl          ?: string;
    readonly heroImage        ?: string;
}

/**
 * Returns true if the value is Layout
 *
 * @param value
 */
export function isLayoutContent ( value: unknown) : value is LayoutContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.LAYOUT
    );
}
