import { useState, useCallback, useMemo } from "react";
import { useTranslation, Trans } from "react-i18next";
import DropdownOsSelector, { DropdownOsOption } from "./DropdownOsSelector";
import { useFetchZipFile } from "../../hook/api/tak/useFetchZipFile";
import {
  getOperatingSystem,
  OperatingSystem,
} from "../../hook/helpers/getOperatingSystem";
import { useAlertDialog } from "../AlertDialogService";

interface DownloadModalProps {
  readonly downloadTitle: string;
  readonly downloadItemTitle: string;
  readonly downloadButtonTitle: string;
  readonly downloadSuccessTitle: string;
  readonly downloadSuccessDescription: string;
  readonly downloadErrorTitle: string;
  readonly downloadErrorDescription: string;
}

interface DownloadModalReturn {
  openDownloadModal: () => void;
  loading: boolean;
}

export function useDownloadModal(props: DownloadModalProps): DownloadModalReturn {
  const { t } = useTranslation();
  const initialOS = getOperatingSystem() === OperatingSystem.iOS ? "iOS" : "Other";
  const [ selectedOS, setSelectedOS] = useState(initialOS);
  const { openDialog } = useAlertDialog();
  const [ loading, setLoading] = useState(false);
  const { mutate: fetchFile, isLoading } = useFetchZipFile(selectedOS);

  const downloadTitle : string = props.downloadTitle;
  const downloadItemTitle : string = props.downloadItemTitle;
  const downloadButtonTitle : string = props.downloadButtonTitle;
  const downloadSuccessTitle : string = props.downloadSuccessTitle;
  const downloadSuccessDescription : string = props.downloadSuccessDescription;
  const downloadErrorTitle : string = props.downloadErrorTitle;
  const downloadErrorDescription : string = props.downloadErrorDescription;

  const osOptions: DropdownOsOption[] = useMemo(
    () => [
      { label: "iOS ITAK", value: "iOS" },
      { label: "Android ATAK tai Windows WinTAK", value: "Other" },
    ],
    [],
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
          title: downloadSuccessTitle,
          description: downloadSuccessDescription,
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
          error.message || t("downloadModal.genericErrorMessage");
        openDialog({
          title: downloadErrorTitle,
          description: (
            <>
              {downloadErrorDescription}
              <br />
              <br />
              <em>{t("downloadModal.errorFromApplication")}</em>
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
  }, [
    downloadSuccessTitle,
    downloadSuccessDescription,
    downloadErrorTitle,
    downloadErrorDescription,
    fetchFile,
    openDialog,
    t,
    selectedOS,
  ]);

  const getDescriptionText = useCallback(() => {
    return (
      <Trans
        i18nKey="downloadModal.downloadDescription"
        components={{
          package: <>{downloadItemTitle}</>,
          strong: <strong />,
          em: <em />,
          button: <DropdownOsSelector
              initialOS={selectedOS}
              osOptions={osOptions}
              onOSChange={handleOSChange}
          />,
          br: <br />,
        }}
      />
    );
  }, [downloadItemTitle, selectedOS, osOptions, handleOSChange]);

  const openDownloadModal = useCallback(() => {
    openDialog({
      title: downloadTitle,
      description: getDescriptionText(),
      confirmLabel: isLoading
        ? t("loading")
        : t(downloadButtonTitle),
      onConfirm: handleDownload,
      confirmColor: "success",
      cancelLabel: t("go-back"),
      onCancel: () => {
        // just close the modal
      },
    });
  }, [
      downloadTitle,
      downloadButtonTitle,
      getDescriptionText,
      handleDownload,
      isLoading,
      openDialog,
    t
  ]);

  return { openDownloadModal, loading };
}
