import { useEffect, useState } from "react";

import { RuntimeContentService } from "../../../libs/rune/services/RuntimeContentService";

import {
  ContentServiceEvent,
  IContentService,
} from "../services/ContentService";

import { useContentService } from "./useContentService";

export function useProductContentService(
  serviceName: string,
): RuntimeContentService | undefined {
  const contentService: IContentService = useContentService();

  const [runtimeContentService, setRuntimeContentService] =
    useState<RuntimeContentService>(() =>
      contentService.getProductContentService(serviceName),
    );

  useEffect(() => {
    setRuntimeContentService(
      contentService.getProductContentService(serviceName),
    );
    return contentService.addEventListener(
      ContentServiceEvent.PRODUCTS_CHANGED,
      () => {
        setRuntimeContentService(
          contentService.getProductContentService(serviceName),
        );
      },
    );
  }, [contentService, serviceName]);

  return runtimeContentService;
}
