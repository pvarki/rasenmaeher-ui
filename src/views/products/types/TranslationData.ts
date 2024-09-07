
/**
 * Collection of translations in key-value pairs for a single language.
 */
export interface TranslationData {
    readonly [key: string]: string;
}

/**
 * Returns true if the value is TranslationData.
 *
 * @param value
 */
export function isTranslationData ( value: unknown) : value is TranslationData {
    return (
        !!value
        && (typeof value === 'object')
        && Object.keys(value).findIndex((key: string): boolean => {
            return typeof (value as unknown as {[key: string]: unknown})[key] !== 'string';
        }) < 0
    );
}
