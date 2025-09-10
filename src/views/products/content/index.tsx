import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { ContentType } from "../../../libs/rune/types/ContentType";
import { RmContentType } from "../types/RmContentType";
import { button } from "./button";
import { card } from "./card";
import { dropdownOsSelector } from "./dropdownOsSelector";
import { errorView } from "./errorView";
import { foldableCard } from "./foldableCard";
import { layout } from "./layout";
import { navigateButtons } from "./navigateButtons";
import { serviceInfoCard } from "./serviceInfoCard";
import { statusBar } from "./statusBar";
import { translate } from "./translate";
import { unfoldableCard } from "./unfoldableCard";

/**
 * These components extend Rune to allow using our own React components.
 */
export function loadCustomizedRuneContent(): void {
  ProductContentRenderer.register(ContentType.TRANSLATE, translate);
  ProductContentRenderer.register(ContentType.ERROR_VIEW, errorView);

  ProductContentRenderer.register(RmContentType.BUTTON, button);
  ProductContentRenderer.register(RmContentType.CARD, card);
  ProductContentRenderer.register(
    RmContentType.DROPDOWN_OS_SELECTOR,
    dropdownOsSelector,
  );
  ProductContentRenderer.register(RmContentType.FOLDABLE_CARD, foldableCard);
  ProductContentRenderer.register(RmContentType.LAYOUT, layout);
  ProductContentRenderer.register(
    RmContentType.NAVIGATE_BUTTONS,
    navigateButtons,
  );
  ProductContentRenderer.register(
    RmContentType.SERVICE_INFO_CARD,
    serviceInfoCard,
  );
  ProductContentRenderer.register(RmContentType.STATUS_BAR, statusBar);
  ProductContentRenderer.register(
    RmContentType.UNFOLDABLE_CARD,
    unfoldableCard,
  );
}
