import {
    isRootContent,
    RootContent,
} from "../../../libs/rune/types/RootContent";
import { Content } from "../../../libs/rune/types/Content";
import { RmContentType } from "./RmContentType";

/**
 * Defines dynamic content DTO for {@link useTakDownloadModal} hook
 */
export interface TakDownloadModalContent extends RootContent {
    readonly type: RmContentType.TAK_DOWNLOAD_MODAL | string;
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
        && value?.type === RmContentType.TAK_DOWNLOAD_MODAL
    );
}
