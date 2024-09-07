import { NavigateFunction } from "react-router-dom";
import { ProductContentService } from "./ProductContentService";
import { TakDownloadModalContent } from "./types/TakDownloadModalContent";

export interface OpenTakDownloadModalCallback {
    (model: TakDownloadModalContent): void;
}

export interface TranslationFunction {
    (name: string): string;
}

export interface RendererContext {
    readonly t                 : TranslationFunction;
    readonly navigate          : NavigateFunction;
    readonly openDownloadModal : OpenTakDownloadModalCallback;
    readonly contentService    : ProductContentService;
}

export class RendererContextImpl implements RendererContext {

    public readonly t                 : TranslationFunction;
    public readonly navigate          : NavigateFunction;
    public readonly openDownloadModal : OpenTakDownloadModalCallback;
    public readonly contentService    : ProductContentService;

    protected constructor (
        t : TranslationFunction,
        navigate : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService : ProductContentService,
    ) {
        this.t = t;
        this.navigate = navigate;
        this.openDownloadModal = openDownloadModal;
        this.contentService = contentService;
    }

    public static create (
        t : TranslationFunction,
        navigate          : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService    : ProductContentService,
    ) : RendererContextImpl {
        return new RendererContextImpl(
            t,
            navigate,
            openDownloadModal,
            contentService,
        );
    }

}
