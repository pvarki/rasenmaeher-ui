import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { ErrorContent } from "../../../libs/rune/types/ErrorContent";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { CardView } from "../CardView";

export const errorView: RendererCompiler<BaseContent> = (
  content: ErrorContent,
): CompiledRenderer => {
  const title = content?.title ?? "";
  const message = content?.message ?? "";
  return () => <CardView title={title} message={message} />;
};
