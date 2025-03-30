import { isRegularObject } from "../helpers/isRegularObject";
import { isStringOrUndefined } from "../helpers/isString";
import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link ServiceInfoCard} component
 */
export interface ServiceInfoCardContent extends BaseParentContent {
    readonly type      : ContentType;
    readonly title    ?: Content | readonly Content[];
    readonly image    ?: string;
    readonly details  ?: Content | readonly Content[];
    readonly body     ?: Content | readonly Content[];
}

/**
 * Returns true if the value is ServiceInfoCard
 *
 * @param value
 */
export function isServiceInfoCardContent (value: unknown) : value is ServiceInfoCardContent {
    return (
        isBaseParentContent(value)
        && isRegularObject(value)
        && value.type === ContentType.SERVICE_INFO_CARD
        && isStringOrUndefined(value?.image)
    );
}
