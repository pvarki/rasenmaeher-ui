import {
    isRootContent,
    RootContent,
} from "./RootContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link MultiDownloadModal} component
 */
export interface MultiDownloadModalContent extends RootContent {
    readonly lang: string;
    readonly type: ContentType;
    readonly name: string;
    readonly title: string;
    readonly genericErrorMessage: string;
    readonly errorFromApplication: string;
    readonly description: readonly Content[];
}

export function isMultiDownloadModalContent (value: unknown) : value is MultiDownloadModalContent {
    return (
        isRootContent(value)
        && value.type === ContentType.MULTI_DOWNLOAD_MODAL
    );
}
