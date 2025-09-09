import { isString } from "../../../libs/rune/helpers/isString";

/**
 * Extended content DTO types currently supported by Rasenmaeher
 */
export enum RmContentType {
  BUTTON = "Button",
  CARD = "Card",
  DROPDOWN_OS_SELECTOR = "DropdownOsSelector",
  FOLDABLE_CARD = "FoldableCard",
  LAYOUT = "Layout",
  NAVIGATE_BUTTONS = "NavigateButtons",
  SERVICE_INFO_CARD = "ServiceInfoCard",
  STATUS_BAR = "StatusBar",
  UNFOLDABLE_CARD = "UnfoldableCard",
  TAK_DOWNLOAD_MODAL = "TakDownloadModal",
  CARDS_CONTAINER = "CardsContainer",
  STEP = "Step",
}

/**
 * Returns true if the value is valid ContentType.
 *
 * @param value
 */
export function isRmContentType (value: unknown) : value is RmContentType {
  if (!value) return false;
  if (!isString(value)) return false;
  switch(value) {
    case RmContentType.LAYOUT: return true;
    case RmContentType.CARD: return true;
    case RmContentType.NAVIGATE_BUTTONS: return true;
    case RmContentType.STATUS_BAR: return true;
    case RmContentType.FOLDABLE_CARD: return true;
    case RmContentType.SERVICE_INFO_CARD: return true;
    case RmContentType.UNFOLDABLE_CARD: return true;
    case RmContentType.DROPDOWN_OS_SELECTOR: return true;
    case RmContentType.BUTTON: return true;
    case RmContentType.TAK_DOWNLOAD_MODAL: return true;
    case RmContentType.CARDS_CONTAINER: return true;
    case RmContentType.STEP: return true;
  }
  return false;
}

export function isRmContentTypeOrUndefined (value: unknown): value is RmContentType | undefined {
  return value === undefined || isRmContentType(value);
}

export function isRmContentTypeOrString (value: unknown): value is RmContentType | string {
  return isString(value);
}
