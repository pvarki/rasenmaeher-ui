import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../components/Loading/LoadingComponent";
import { useTakDownloadModal } from "../../components/services/TakDownloadModal";
import { ProductContentRenderer } from "./ProductContentRenderer";
import {
    ProductContentService,
    ProductContentServiceImpl,
} from "./ProductContentService";
import {
    RendererContext,
    RendererContextImpl,
} from "./RendererContextImpl";
import { Content } from "./types/Content";
import EN_TAK_CONTENT from "./data/tak-en.json";
import { ContentType } from "./types/ContentType";

export const CONTENT_SERVICE : ProductContentService = ProductContentServiceImpl.create( EN_TAK_CONTENT as Content[] );

export interface ServiceViewProps {
    readonly name : string;
}

export function ServiceView ( props: ServiceViewProps) {
    const viewName = props.name;
    const navigate = useNavigate();
    let view = CONTENT_SERVICE.getView( viewName );
    if ( !view ) {
        // TODO: Implement 404 error view
        console.warn( `Warning! Could not find view named: ${viewName}` );
        view = {lang: 'en', name: viewName, type: ContentType.VIEW, body: `View not found: ${viewName}`};
    }
    const { openDownloadModal, loading } = useTakDownloadModal();
    if ( loading ) {
        return <LoadingComponent text={ loading } />;
    }
    const context : RendererContext = RendererContextImpl.create(navigate, openDownloadModal, CONTENT_SERVICE);
    return ProductContentRenderer.render( view, context );
}
