import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useDownloadTakZipModal } from "../../components/tak/DownloadTakZipModal";
import { CONTENT_SERVICE } from "./ContentService";
import { ProductContentRenderer } from "./ProductContentRenderer";
import {
    RendererContext,
    RendererContextImpl,
} from "./RendererContextImpl";
import { ContentActions } from "./types/ContentActions";
import { ContentType } from "./types/ContentType";

export interface ServiceViewProps {
    readonly name : string;
    readonly actions ?: ContentActions;
}

export function ServiceView ( props: ServiceViewProps ) {
    const {t} = useTranslation("productContent");
    const viewName = props.name;
    const actions = props.actions;
    const navigate = useNavigate();
    let view = CONTENT_SERVICE.getView( viewName );
    if ( !view ) {
        // TODO: Implement 404 error view
        console.warn( `Warning! Could not find view named: ${viewName}` );
        view = {name: viewName, type: ContentType.VIEW, body: `View not found: ${viewName}`};
    }
    const { openDownloadModal, loading } = useDownloadTakZipModal();
    if ( loading ) {
        return <LoadingComponent text={ 'loading' } />;
    }
    const context : RendererContext = RendererContextImpl.create(t, navigate, openDownloadModal, CONTENT_SERVICE, actions);
    return ProductContentRenderer.render( view, context );
}
