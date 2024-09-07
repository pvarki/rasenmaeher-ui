import { NavigateFunction } from "react-router-dom";
import { ProductContentService } from "./ProductContentService";
import { TakDownloadModalContent } from "./types/TakDownloadModalContent";

export interface OpenTakDownloadModalCallback {
    (model: TakDownloadModalContent): void;
}

export interface RendererContext {
    readonly navigate          : NavigateFunction;
    readonly openDownloadModal : OpenTakDownloadModalCallback;
    readonly contentService    : ProductContentService;
}

export class RendererContextImpl implements RendererContext {

    public readonly navigate          : NavigateFunction;
    public readonly openDownloadModal : OpenTakDownloadModalCallback;
    public readonly contentService    : ProductContentService;

    protected constructor (
        navigate : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService : ProductContentService,
    ) {
        this.navigate = navigate;
        this.openDownloadModal = openDownloadModal;
        this.contentService = contentService;
    }

    public static create (
        navigate          : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService    : ProductContentService,
    ) : RendererContextImpl {
        return new RendererContextImpl(
            navigate,
            openDownloadModal,
            contentService,
        );
    }

}
