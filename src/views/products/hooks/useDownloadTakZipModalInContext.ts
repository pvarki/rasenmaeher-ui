import { useCallback, useEffect } from "react";
import { useDownloadTakZipModal } from "../../../components/tak/DownloadTakZipModal";
import {
  RendererContext,
  RendererEvent,
} from "../../../libs/rune/RendererContextImpl";
import { isTakDownloadModalContent } from "../types/TakDownloadModalContent";

/**
 * A hook that provides opening (modal) functionality within a renderer context.
 */
export function useDownloadTakZipModalInContext(
  context: RendererContext | undefined,
): void {
  const { openDownloadModal } = useDownloadTakZipModal();

  const openEventCallback = useCallback(
    (_event: RendererEvent, target: unknown) => {
      if (isTakDownloadModalContent(target)) {
        openDownloadModal();
      } else {
        console.warn(`Warning: Invalid open target:`, target);
      }
    },
    [openDownloadModal],
  );

  // Listen for open events from the renderer context
  useEffect(() => {
    if (!context) return;
    return context.addEventListener(RendererEvent.OPEN, openEventCallback);
  });
}
