import { DropdownOsOption } from "../../../components/services/DropdownOsSelector";
import {
    BaseContent,
    isBaseContent,
} from "./BaseContent";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link DropdownOsSelector} component
 */
export interface DropdownOsSelectorContent extends BaseContent {
    readonly type       : ContentType;
    readonly initialOS ?: string;
    readonly options    : readonly DropdownOsOption[];
}

/**
 * Returns true if the value is DropdownOsSelector
 *
 * @param value
 */
export function isDropdownOsSelectorContent (value: unknown) : value is DropdownOsSelectorContent {
    return (
        isBaseContent(value)
        && value.type === ContentType.DROPDOWN_OS_SELECTOR
    );
}
