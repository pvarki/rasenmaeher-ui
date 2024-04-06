import { useState, useCallback, useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";
import DropdownOsSelector from "./DropdownOsSelector";
import { useFetchZipFile } from "../../hook/api/tak/useFetchZipFile";
import { getOperatingSystem } from "../../hook/helpers/getOperatingSystem";
import { useAlertDialog } from "../../components/AlertDialogService";

interface DownloadTakZipModalReturn {
  openDownloadModal: () => void;
  loading: boolean;
}

export function useDownloadTakZipModal(): DownloadTakZipModalReturn {
  const { t } = useTranslation();
  const initialOS = getOperatingSystem() === "iOS" ? "iOS" : "Other";
  const [selectedOS, setSelectedOS] = useState(initialOS);
  const { openDialog } = useAlertDialog();
  const [loading, setLoading] = useState(false);
  const { mutate: fetchFile, isLoading } = useFetchZipFile(selectedOS);

  const osOptions: { label: string; value: string }[] = useMemo(
    () => [
      { label: t("takZipDownload.osOptions.ios"), value: "iOS" },
      { label: t("takZipDownload.androidOrWin"), value: "Other" },
    ],
    [t],
  );

  const handleOSChange = useCallback((newOS: string) => {
    setSelectedOS(newOS);
  }, []);

  const handleDownload = useCallback(() => {
    console.log("Selected OS:", selectedOS);
    setLoading(true);

    fetchFile(undefined, {
      onSuccess: ({ blob, filename }) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        setLoading(false);
        openDialog({
          title: t("takZipDownload.downloadSuccessTitle"),
          description: t("takZipDownload.downloadSuccessDescription"),
          confirmLabel: t("ok"),
          confirmColor: "success",
          onConfirm: () => {
            // Just close the modal
          },
        });
      },
      onError: (error) => {
        setLoading(false);
        const errorMessage =
          error.message || t("takZipDownload.genericErrorMessage");
        openDialog({
          title: t("takZipDownload.downloadErrorTitle"),
          description: (
            <>
              <Trans
                i18nKey="takZipDownload.downloadErrorDescription"
                components={{ strong: <strong />, em: <em />, br: <br /> }}
              />
              <br />
              <br />
              <em>{t("takZipDownload.errorFromApplication")}</em>
              <br />"{errorMessage}"
            </>
          ),
          confirmLabel: t("close"),
          confirmColor: "primary",
          onConfirm: () => {
            // Just close the modal
          },
        });
      },
    });
  }, [fetchFile, openDialog, t, selectedOS]);

  const getDescriptionText = useCallback(() => {
    return (
      <>
        <Trans i18nKey="takZipDownload.downloadDescriptionPart1" />
        <DropdownOsSelector
          initialOS={selectedOS}
          osOptions={osOptions}
          onOSChange={handleOSChange}
        />
        <Trans i18nKey="takZipDownload.downloadDescriptionPart2" />
        <br />
        <br />
        <Trans
          i18nKey="takZipDownload.downloadDescriptionPart3"
          components={{ strong: <strong />, em: <em /> }}
        />
      </>
    );
  }, [selectedOS, osOptions, handleOSChange]);

  const openDownloadModal = useCallback(() => {
    openDialog({
      title: t("takZipDownload.downloadTitle"),
      description: getDescriptionText(),
      confirmLabel: isLoading
        ? t("loading")
        : t("takZipDownload.downloadButton"),
      onConfirm: handleDownload,
      confirmColor: "success",
      cancelLabel: t("go-back"),
      onCancel: () => {
        // just close the modal
      },
    });
  }, [getDescriptionText, handleDownload, isLoading, openDialog, t]);

  if (loading) {
    return {
      openDownloadModal,
      loading,
    };
  }

  return { openDownloadModal, loading };
}
