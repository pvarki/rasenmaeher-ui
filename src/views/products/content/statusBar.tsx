import { StatusBar, StatusBarProps } from "../../../components/StatusBar";
import { parseInteger } from "../../../libs/rune/helpers/parseInteger";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { StatusBarContent } from "../types/StatusBarContent";

function getStatusBarProps(
  value: StatusBarContent,
): (context: RendererContext) => StatusBarProps {
  const titleFn = ProductContentRenderer.compile(value?.title);
  const progressMax = parseInteger(value.progressMax) ?? 1;
  const progressNow = parseInteger(value.progressNow) ?? 1;
  return (context: RendererContext) => {
    return {
      ...{ title: titleFn(context) },
      ...{ progressMax: progressMax },
      ...{ progressNow: progressNow },
    };
  };
}

export const statusBar: RendererCompiler<BaseContent> = (
  content: StatusBarContent,
): CompiledRenderer => {
  const fn = getStatusBarProps(content);
  return (context: RendererContext) => <StatusBar {...fn(context)} />;
};
