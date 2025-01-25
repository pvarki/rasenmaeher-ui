import { isString } from "../helpers/isString";

/**
 * Content DTO types currently supported
 */
export enum ContentType {
    I18N = "i18n",
    ASSET = "Asset",
    LAYOUT = "Layout",
    VIEW = "View",
    COMPONENT = "Component",
    STEP = "Step",
    CARD = "Card",
    NAVIGATE_BUTTONS = "NavigateButtons",
    STATUS_BAR = "StatusBar",
    COMPONENT_CHILDREN = "Component.Children",
    CARDS_CONTAINER = "CardsContainer",
    FOLDABLE_CARD = "FoldableCard",
    SERVICE_INFO_CARD = "ServiceInfoCard",
    UNFOLDABLE_CARD = "UnfoldableCard",
    TAK_DOWNLOAD_MODAL = "TakDownloadModal",
    DROPDOWN_OS_SELECTOR = "DropdownOsSelector",
    BUTTON = "Button",
    DIV = "div",
    SPAN = "span",
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
    UL = "ul",
    LI = "li",
    OL = "ol",
    I = "i",
    P = "p",
    EM = "em",
    BLOCKQUOTE = "blockquote",
    STRONG = "strong",
    A = "a",
    HR = "hr",
    BR = "br",
    IMG = "img",
    PRE = "pre",
    TABLE = "table",
    THEAD = "thead",
    TBODY = "tbody",
    TFOOT = "tfoot",
    TR = "tr",
    TH = "th",
    TD = "td",
    B = "b",
    U = "u",
    CODE = "code",
    DEL = "del",
    SUP = "sup",
    SUB = "sub",
    AUDIO = "audio",
    VIDEO = "video",
}


/**
 * Returns true if the value is valid ContentType.
 *
 * @param value
 */
export function isContentType (value: unknown) : value is ContentType {
    if (!value) return false;
    if (!isString(value)) return false;
    switch(value) {
        case ContentType.I18N: return true;
        case ContentType.ASSET: return true;
        case ContentType.LAYOUT: return true;
        case ContentType.VIEW: return true;
        case ContentType.STEP: return true;
        case ContentType.CARD: return true;
        case ContentType.NAVIGATE_BUTTONS: return true;
        case ContentType.STATUS_BAR: return true;
        case ContentType.COMPONENT_CHILDREN: return true;
        case ContentType.CARDS_CONTAINER: return true;
        case ContentType.FOLDABLE_CARD: return true;
        case ContentType.SERVICE_INFO_CARD: return true;
        case ContentType.UNFOLDABLE_CARD: return true;
        case ContentType.TAK_DOWNLOAD_MODAL: return true;
        case ContentType.DROPDOWN_OS_SELECTOR: return true;
        case ContentType.BUTTON: return true;
        case ContentType.DIV: return true;
        case ContentType.SPAN: return true;
        case ContentType.H1: return true;
        case ContentType.H2: return true;
        case ContentType.H3: return true;
        case ContentType.H4: return true;
        case ContentType.H5: return true;
        case ContentType.H6: return true;
        case ContentType.UL: return true;
        case ContentType.LI: return true;
        case ContentType.I: return true;
        case ContentType.P: return true;
        case ContentType.EM: return true;
        case ContentType.STRONG: return true;
        case ContentType.A: return true;
        case ContentType.HR: return true;
        case ContentType.BR: return true;
        case ContentType.IMG: return true;
        case ContentType.BLOCKQUOTE: return true;
        case ContentType.OL: return true;
        case ContentType.PRE: return true;
        case ContentType.TABLE: return true;
        case ContentType.THEAD: return true;
        case ContentType.TBODY: return true;
        case ContentType.TFOOT: return true;
        case ContentType.TR: return true;
        case ContentType.TH: return true;
        case ContentType.B: return true;
        case ContentType.U: return true;
        case ContentType.CODE: return true;
        case ContentType.DEL: return true;
        case ContentType.SUP: return true;
        case ContentType.SUB: return true;
        case ContentType.AUDIO: return true;
        case ContentType.VIDEO: return true;
    }
    return false;
}

export function isContentTypeOrUndefined (value: unknown): value is ContentType | undefined {
    return value === undefined || isContentType(value);
}

export function isContentTypeOrString (value: unknown): value is ContentType | string {
    return isString(value);
}
