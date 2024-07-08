import {
    useState,
    useCallback,
    ReactNode,
    useEffect,
} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useFetchTakZipFile } from "../../hook/api/tak/useFetchTakZipFile";
import {
    getOperatingSystem,
    OperatingSystem,
} from "../../hook/helpers/getOperatingSystem";
import { ProductContentRenderer } from "../../views/services/ProductContentRenderer";
import {
    OpenTakDownloadModalCallback,
    RendererContext,
    RendererContextImpl,
} from "../../views/services/RendererContextImpl";
import { CONTENT_SERVICE } from "../../views/services/ServiceView";
import { Content } from "../../views/services/types/Content";
import { TakDownloadModalContent } from "../../views/services/types/TakDownloadModalContent";
import { useAlertDialog } from "../AlertDialogService";

interface TakDownloadModalReturn {
    readonly openDownloadModal: OpenTakDownloadModalCallback;
    readonly loading: string;
    readonly setContent : { (value: TakDownloadModalContent): void };
}

/**
 *
 */
export function useTakDownloadModal(): TakDownloadModalReturn {

    const navigate = useNavigate();

    const { t } = useTranslation();
    const [ loading, setLoading] = useState<string>('');
    const [ content, setContent ] = useState<TakDownloadModalContent|undefined>();

    const initialOS : "iOS" | "Other" = getOperatingSystem() === OperatingSystem.iOS ? "iOS" : "Other";
    const [ selectedOS, setSelectedOS] = useState(initialOS);
    const { mutate: fetchFile, isLoading } = useFetchTakZipFile(selectedOS);

    const { openDialog } = useAlertDialog();

    const downloadSuccessTitle = content?.success?.title;
    const downloadSuccessDescription = content?.success?.description;
    const genericErrorMessage = content?.genericErrorMessage;
    const downloadErrorTitle = content?.error?.title;
    const downloadErrorDescription = content?.error?.description;
    const errorFromApplication = content?.errorFromApplication;
    const iAmDownloading = content?.iAmDownloading;

    const handleOSChange = useCallback(() : void => {
        const newOS = CONTENT_SERVICE.getSelectedOS() === OperatingSystem.iOS ? "iOS" : "Other";
        setSelectedOS(newOS);
    }, []);

    console.log('Initial OS: ', initialOS);
    console.log('Selected OS: ', selectedOS);

    useEffect(() => {
        return CONTENT_SERVICE.addDropdownOsSelectorChangeListener(handleOSChange)
    }, [
        handleOSChange
    ]);

    const handleDownload = useCallback(() => {
        console.log("Selected OS:", selectedOS);
        setLoading( iAmDownloading ?? 'Loading');

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
                setLoading('');
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
                setLoading('');
                const errorMessage =
                    error.message || genericErrorMessage;
                openDialog({
                    title: downloadErrorTitle,
                    description: (
                        <>
                            {downloadErrorDescription}
                            <br />
                            <br />
                            <em>{errorFromApplication}</em>
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
        iAmDownloading,
        errorFromApplication,
        downloadSuccessTitle,
        downloadSuccessDescription,
        genericErrorMessage,
        downloadErrorTitle,
        downloadErrorDescription,
        fetchFile,
        openDialog,
        t,
        selectedOS,
    ]);

    const getDescriptionText = useCallback((context : RendererContext, description : readonly Content[]) : ReactNode => {
        return <>{ProductContentRenderer.render(description, context)}</>;
    }, [
    ]);

    const openDownloadModal = useCallback((model: TakDownloadModalContent) => {

        setContent(model);

        const downloadTitle = model?.title ?? 'title';
        const downloadButtonTitle : string = model?.button?.title ?? 'download';

        const context : RendererContext = RendererContextImpl.create(navigate, openDownloadModal, CONTENT_SERVICE);

        openDialog({
            title: downloadTitle,
            description: getDescriptionText(context, model?.description),
            confirmLabel: isLoading
                ? t("loading")
                : downloadButtonTitle,
            onConfirm: handleDownload,
            confirmColor: "success",
            cancelLabel: t("go-back"),
            onCancel: () => {
                // just close the modal
            },
        });

    }, [
        setContent,
        navigate,
        getDescriptionText,
        handleDownload,
        isLoading,
        openDialog,
        t
    ]);

    return { openDownloadModal, loading, setContent };
}
