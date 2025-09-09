import { DropdownOsOption } from "../../../components/tak/DropdownOsSelector";
import {
    BaseContent,
    isBaseContent,
} from "../../../libs/rune/types/BaseContent";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link DropdownOsSelector} component
 */
export interface DropdownOsSelectorContent extends BaseContent {
    readonly type       : RmContentType.DROPDOWN_OS_SELECTOR | string;
    readonly initialOS ?: string;
    readonly options   ?: readonly DropdownOsOption[];
}

/**
 * Returns true if the value is DropdownOsSelector
 *
 * @param value
 */
export function isDropdownOsSelectorContent (value: unknown) : value is DropdownOsSelectorContent {
    return (
        isBaseContent(value)
        && value?.type === RmContentType.DROPDOWN_OS_SELECTOR
    );
}
