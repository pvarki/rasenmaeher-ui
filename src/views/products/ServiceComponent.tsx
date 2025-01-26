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
import { ContentType } from "./types/ContentType";

export interface ServiceComponentProps {
    readonly serviceName : string;
    readonly componentName : string;
    readonly children ?: Node;
}

export function ServiceComponent (props: ServiceComponentProps) {
    const serviceName = props.serviceName;
    const {t} = useTranslation(`productContent/${serviceName}`);
    const componentName = props.componentName;
    const navigate = useNavigate();
    const contentService  = ContentService.getContentService(serviceName);
    let component = contentService.getComponent( componentName );
    if ( !(contentService && component) ) {
        // TODO: Implement 404 error component
        console.warn( `Warning! Could not find component named: ${componentName}` );
        component = {name: componentName, type: ContentType.COMPONENT, body: `Component not found: ${componentName}`};
    }
    const { openDownloadModal, loading } = useDownloadTakZipModal();
    if ( loading ) {
        return <LoadingComponent text={ 'loading' } />;
    }
    const context : RendererContext = RendererContextImpl.create(t, navigate, openDownloadModal, contentService);
    return ProductContentRenderer.render( component, context );
}
