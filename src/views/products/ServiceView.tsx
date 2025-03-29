import { useEffect } from "react";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useContentView } from "./hooks/useContentView";
import { useRendererContext } from "./hooks/useRendererContext";
import { ProductContentRenderer } from "./ProductContentRenderer";
import { ContentActions } from "./types/ContentActions";

export interface ServiceViewProps {
    readonly serviceName : string;
    readonly viewName : string;
    readonly actions ?: ContentActions;
}

export function ServiceView ( props: ServiceViewProps ) {
    const serviceName = props.serviceName;
    const viewName = props.viewName;
    const actions = props.actions;

    useEffect(() => {
        window.scrollTo(0, 60);
    }, []);

    const view = useContentView(serviceName, viewName);

    const context = useRendererContext(serviceName, actions);
    if (!context) {
        return <LoadingComponent text={ 'loading' } />;
    }

    return ProductContentRenderer.render( view, context );
}
