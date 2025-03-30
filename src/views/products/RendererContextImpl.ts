import { NavigateFunction } from "react-router-dom";
import { ProductContentService } from "./ProductContentService";
import { BaseContent } from "./types/BaseContent";
import { ComponentContent } from "./types/ComponentContent";
import { ContentActions } from "./types/ContentActions";
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
    readonly contentActions    : ContentActions;

    // Defines parent component data, if any
    readonly componentContent  : ComponentContent | undefined;

    // Defines parent state data, if any
    readonly stateContent  : BaseContent | undefined;

    createComponentContext (
        componentContent : ComponentContent,
        stateContent : BaseContent,
    ) : RendererContext;

    createContextWithoutParent () : RendererContext;
}

export class RendererContextImpl implements RendererContext {

    public readonly t                 : TranslationFunction;
    public readonly navigate          : NavigateFunction;
    public readonly openDownloadModal : OpenTakDownloadModalCallback;
    public readonly contentService    : ProductContentService;
    public readonly contentActions    : ContentActions;
    public readonly componentContent  : ComponentContent | undefined;
    public readonly stateContent      : BaseContent | undefined;

    protected constructor (
        t                 : TranslationFunction,
        navigate          : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService    : ProductContentService,
        contentActions   ?: ContentActions,
        componentContent ?: ComponentContent,
        stateContent     ?: BaseContent,
    ) {
        this.t = t;
        this.navigate = navigate;
        this.openDownloadModal = openDownloadModal;
        this.contentService = contentService;
        this.contentActions = contentActions ?? {};
        this.componentContent = componentContent ?? undefined;
        this.stateContent = stateContent ?? undefined;
    }

    public static create (
        t                 : TranslationFunction,
        navigate          : NavigateFunction,
        openDownloadModal : OpenTakDownloadModalCallback,
        contentService    : ProductContentService,
        contentActions   ?: ContentActions,
        componentContent ?: ComponentContent,
        stateContent     ?: BaseContent,
    ) : RendererContextImpl {
        return new RendererContextImpl(
            t,
            navigate,
            openDownloadModal,
            contentService,
            contentActions,
            componentContent,
            stateContent,
        );
    }

    /**
     * Creates a new component context from previous context object.
     *
     * @param componentContent
     * @param stateContent
     */
    public createComponentContext (
        componentContent : ComponentContent,
        stateContent     : BaseContent,
    ) : RendererContext {
        return new RendererContextImpl(
            this.t,
            this.navigate,
            this.openDownloadModal,
            this.contentService,
            this.contentActions,
            componentContent,
            stateContent,
        );
    }

    /**
     * Creates a new component context from previous context object.
     *
     */
    public createContextWithoutParent () : RendererContext {
        return new RendererContextImpl(
            this.t,
            this.navigate,
            this.openDownloadModal,
            this.contentService,
            this.contentActions,
            undefined,
            undefined,
        );
    }

}
