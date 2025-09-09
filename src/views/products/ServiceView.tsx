import { useCompileContent } from "../../libs/rune/hooks/useCompileContent";
import { useNavigateInContext } from "../../libs/rune/hooks/useNavigateInContext";
import { RendererContext } from "../../libs/rune/RendererContextImpl";
import { RuntimeContentService } from "../../libs/rune/services/RuntimeContentService";
import { useContentView } from "./hooks/useContentView";
import { useRendererContext } from "../../libs/rune/hooks/useRendererContext";
import { useDownloadTakZipModalInContext } from "./hooks/useDownloadTakZipModalInContext";
import { useProductContentService } from "./hooks/useProductContentService";
import { useScrollToTop } from "./hooks/useScrollToTop";
import { ProductLoadingView } from "./ProductLoadingView";
import { ContentActions } from "../../libs/rune/types/ContentActions";

export interface ServiceViewProps {
    readonly serviceName : string;
    readonly viewName : string;
    readonly actions ?: ContentActions;
}

export function ServiceView ( props: ServiceViewProps ) {
    const serviceName = props.serviceName;
    const viewName = props.viewName;
    const actions = props.actions;

    const view = useContentView(serviceName, viewName);
    const compiledView = useCompileContent(view);

    const contentServiceOrNot : RuntimeContentService | undefined = useProductContentService(serviceName);

    const context : RendererContext | undefined = useRendererContext(contentServiceOrNot, actions);
    useScrollToTop(60);
    useNavigateInContext(context);
    useDownloadTakZipModalInContext(context);

    if (!context) {
        return <ProductLoadingView title={ serviceName } message={viewName} />;
    }
    return compiledView(context);
}
