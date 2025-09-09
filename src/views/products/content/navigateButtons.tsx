import {
  NavigateButtons,
  NavigateButtonsProps,
} from "../../../components/NavigateButtons";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { NavigateButtonsContent } from "../types/NavigateButtonsContent";

function getNavigateButtonsProps( value: NavigateButtonsContent ) : NavigateButtonsProps {
  return {
    ... { backUrl : value.backUrl ?? '' },
    ... { forwardUrl : value.forwardUrl ?? '' },
    ... (value?.alterBack !== undefined ? { alterBack : value?.alterBack } : {}),
    ... (value?.alterForward !== undefined ? { alterForward : value?.alterForward } : {}),
  };
}

export const navigateButtons : RendererCompiler<BaseContent> = (content: NavigateButtonsContent) : CompiledRenderer => {
  const props = getNavigateButtonsProps(content);
  return () => <NavigateButtons {...props} />;
}
