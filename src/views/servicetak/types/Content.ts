import {
    BaseContent,
    isBaseContent,
} from "./BaseContent";
import {
    MultiDownloadModalContent,
} from "./MultiDownloadModalContent";
import {
    RootContent,
} from "./RootContent";
import {
    ViewContent,
} from "./ViewContent";

/**
 * Any accepted dynamic content DTO type
 */
export type Content = ViewContent | MultiDownloadModalContent | RootContent | BaseContent | string;

export function isContentOrArray (value: unknown) : value is Content | readonly Content[] {

    if (typeof value === "string") {
        return true;
    }

    if (typeof value === "object" && Array.isArray(value)) {
        return value.every( (item) => isContentOrArray(item) );
    }

    return isBaseContent(value);
}
