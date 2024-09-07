import {
    isRootContent,
    RootContent,
} from "./RootContent";
import { Content } from "./Content";
import { ContentType } from "./ContentType";

/**
 * Defines dynamic content DTO for {@link useTakDownloadModal} hook
 */
export interface TakDownloadModalContent extends RootContent {
    readonly lang: string;
    readonly type: ContentType;
    readonly name: string;
    readonly title: string;
    readonly genericErrorMessage: string;
    readonly errorFromApplication: string;
    readonly iAmDownloading ?: string;
    readonly description: readonly Content[];
    readonly button : {
        readonly title: string;
    }
    readonly success : {
        readonly title: string;
        readonly description: string;
    }
    readonly error : {
        readonly title: string;
        readonly description: string;
    }
}

export function isTakDownloadModalContent ( value: unknown) : value is TakDownloadModalContent {
    return (
        isRootContent(value)
        && value.type === ContentType.TAK_DOWNLOAD_MODAL
    );
}
