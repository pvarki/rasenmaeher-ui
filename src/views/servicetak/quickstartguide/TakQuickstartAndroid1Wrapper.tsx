import { useDownloadTakZipModal } from "../../../components/tak/DownloadTakZipModal";
import { useTranslation } from "react-i18next";
import LoadingComponent from "../../../components/Loading/LoadingComponent";
import { ServiceView } from "../../products/ServiceView";

export function TakQuickstartAndroid1() {
  const { t } = useTranslation();
  const { openDownloadModal, loading } = useDownloadTakZipModal();
  if (loading) {
    return <LoadingComponent text={t("takZipDownload.iAmDownloading")} />;
  }
  const handleDownloadButtonClick = () => {
    (openDownloadModal as () => void)();
  };

  return (
      <ServiceView
          serviceName={'tak'}
          viewName={'TakQuickstartAndroid1'}
          actions={{
            'downloadZip': handleDownloadButtonClick,
          }}
      />
  );
}
