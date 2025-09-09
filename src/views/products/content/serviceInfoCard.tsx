import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { ServiceInfoCardContent } from "../types/ServiceInfoCardContent";

export const serviceInfoCard : RendererCompiler<BaseContent> = (content: ServiceInfoCardContent) : CompiledRenderer => {
  const titleFn = ProductContentRenderer.compile(content.title);
  const detailsFn = ProductContentRenderer.compile(content?.details);
  const bodyFn = ProductContentRenderer.compile(content?.body);
  return (context : RendererContext) => <ServiceInfoCard
    title={titleFn(context)}
    image={content.image}
    details={detailsFn(context)}
  >{bodyFn(context)}</ServiceInfoCard>;
}
