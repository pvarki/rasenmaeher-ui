import {
    ContentType,
} from "./ContentType";
import { TranslationCollection, isTranslationCollection } from "./TranslationCollection";

/**
 * Translation content for i18n
 */
export interface TranslationContent {
    readonly type : ContentType.I18N;
    readonly data : TranslationCollection;
}

/**
 * Returns true if the value is TranslationContent.
 *
 * @param value
 */
export function isTranslationContent ( value: unknown) : value is TranslationContent {
    return (
        !!value
        && (typeof value === 'object')
        && (value as unknown as {[key: string]: unknown})?.type === ContentType.I18N
        && isTranslationCollection((value as unknown as {[key: string]: unknown})?.data)
    );
}
