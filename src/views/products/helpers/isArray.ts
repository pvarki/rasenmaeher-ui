
export function isArray (value: unknown): value is unknown[] {
    return (
        typeof value === 'object' &&
        value !== null &&
        Array.isArray(value)
    );
}

export function isArrayOrUndefined (value: unknown): value is string | undefined {
    return value === undefined || isArray(value);
}
