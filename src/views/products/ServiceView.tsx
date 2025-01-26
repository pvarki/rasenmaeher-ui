import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useDownloadTakZipModal } from "../../components/tak/DownloadTakZipModal";
import { ContentService } from "./ContentService";
import { ProductContentRenderer } from "./ProductContentRenderer";
import {
    RendererContext,
    RendererContextImpl,
} from "./RendererContextImpl";
import { ContentActions } from "./types/ContentActions";
import { ContentType } from "./types/ContentType";

export interface ServiceViewProps {
    readonly serviceName : string;
    readonly viewName : string;
    readonly actions ?: ContentActions;
}

export function ServiceView ( props: ServiceViewProps ) {
    const serviceName = props.serviceName;
    const {t} = useTranslation(`productContent:${serviceName}`);
    const viewName = props.viewName;
    const actions = props.actions;
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 60);
    }, []);
    const contentService = ContentService.getContentService(serviceName);
    let view = contentService.getView( viewName );
    if ( !view ) {
        // TODO: Implement 404 error view
        console.warn( `Warning! Could not find view named: ${viewName}` );
        view = {name: viewName, type: ContentType.VIEW, body: `View not found: ${viewName}`};
    }
    const { openDownloadModal, loading } = useDownloadTakZipModal();
    if ( loading ) {
        return <LoadingComponent text={ 'loading' } />;
    }
    const context : RendererContext = RendererContextImpl.create(t, navigate, openDownloadModal, contentService, actions);
    return ProductContentRenderer.render( view, context );
}
