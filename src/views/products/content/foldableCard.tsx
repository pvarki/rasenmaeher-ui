import { FoldableCard } from "../../../components/FoldableCard";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { FoldableCardContent } from "../types/FoldableCardContent";

export const foldableCard: RendererCompiler<BaseContent> = (
  content: FoldableCardContent,
): CompiledRenderer => {
  const titleFn = ProductContentRenderer.compile(content.title);
  const bodyFn = ProductContentRenderer.compile(content?.body);
  return (context: RendererContext) => (
    <FoldableCard title={titleFn(context)} imageSrc={content.image}>
      {bodyFn(context)}
    </FoldableCard>
  );
};
