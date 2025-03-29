import {
  useEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDownloadTakZipModal } from "../../../components/tak/DownloadTakZipModal";
import { getContentI18nNamespace } from "../../../i18n";
import {
  RendererContext,
  RendererContextImpl,
} from "../RendererContextImpl";
import { ContentActions } from "../types/ContentActions";
import { useProductContentService } from "./useProductContentService";

export function useRendererContext (
  serviceName : string,
  actions ?: ContentActions,
) : RendererContext | undefined {

  const contentServiceOrNot = useProductContentService(serviceName);
  const [context, setContext] = useState<RendererContext | undefined>(undefined);
  const navigate = useNavigate();
  const {t} = useTranslation(getContentI18nNamespace(serviceName));
  const { openDownloadModal, loading } = useDownloadTakZipModal();

  useEffect( () => {
    if (loading) return;
    if (!contentServiceOrNot) return;

    const c : RendererContext = RendererContextImpl.create(t, navigate, openDownloadModal, contentServiceOrNot, actions);
    setContext(c);
  }, [
    contentServiceOrNot,
    actions,
    openDownloadModal,
    loading,
    t,
    navigate,
    setContext,
  ]);

  return context;
}
