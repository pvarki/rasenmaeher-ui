import {
    BaseParentContent,
    isBaseParentContent,
} from "./BaseParentContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link Step} component
 */
export interface StepContent extends BaseParentContent {
    readonly type : ContentType;
    readonly image ?: string;
    readonly imageLink ?: string;
    readonly imageClasses ?: readonly string[];
    readonly description ?: Content | readonly Content[];
    readonly note ?: Content | readonly Content[];
}

/**
 * Returns true if the value is Step
 *
 * @param value
 */
export function isStepContent ( value: unknown) : value is StepContent {
    return (
        isBaseParentContent(value)
        && value.type === ContentType.STEP
    );
}
