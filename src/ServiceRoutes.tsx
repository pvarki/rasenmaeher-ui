import { useTranslation } from "react-i18next";
import { Routes, Route } from "react-router-dom";
import LoadingComponent from "./components/Loading/LoadingComponent";
import { useDownloadTakZipModal } from "./components/tak/DownloadTakZipModal";
import { ContentService } from "./views/products/ContentService";
import { ServiceView } from "./views/products/ServiceView";

export function ServiceRouteWrapper( props: { serviceName : string }) {
    const serviceName = props.serviceName;
    const contentService = ContentService.getContentService(serviceName);
    const viewNames = contentService ? contentService.getAllViewNames() : [];
    const { t } = useTranslation();
    const { openDownloadModal, loading } = useDownloadTakZipModal();
    if (loading) {
        return <LoadingComponent text={t("takZipDownload.iAmDownloading")} />;
    }
    const handleDownloadButtonClick = () => {
        (openDownloadModal as () => void)();
    };
    return (
        <Routes>{viewNames.map(
            (viewName: string, index: number) => {
                const view = contentService?.getView(viewName);
                const path : string = view?.path ?? viewName;
                return <Route key={index} path={path} element={
                    <ServiceView
                        serviceName={serviceName}
                        viewName={viewName}
                        actions={{
                            'downloadZip': handleDownloadButtonClick,
                        }}
                    />
                } />;
            })}</Routes>
    );
}
