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
import { ContentType } from "./types/ContentType";

export interface ServiceComponentProps {
    readonly name : string;
    readonly children ?: Node;
}

export function ServiceComponent ( props: ServiceComponentProps) {
    const {t} = useTranslation("productContent");
    const componentName = props.name;
    const navigate = useNavigate();
    let component = CONTENT_SERVICE.getComponent( componentName );
    if ( !component ) {
        // TODO: Implement 404 error component
        console.warn( `Warning! Could not find component named: ${componentName}` );
        component = {name: componentName, type: ContentType.COMPONENT, body: `Component not found: ${componentName}`};
    }
    const { openDownloadModal, loading } = useDownloadTakZipModal();
    if ( loading ) {
        return <LoadingComponent text={ 'loading' } />;
    }
    const context : RendererContext = RendererContextImpl.create(t, navigate, openDownloadModal, CONTENT_SERVICE);
    return ProductContentRenderer.render( component, context );
}
