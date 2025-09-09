import { Card } from "../../../components/Card";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import {
  CardContent,
  CardContentProps,
} from "../types/CardContent";

function getCardProps( value: CardContent ) : (context : RendererContext) => CardContentProps {
  const titleFn = ProductContentRenderer.compile(value?.title);
  const detailsFn = value?.details !== undefined ? ProductContentRenderer.compile(value?.details) : undefined;

  return (context : RendererContext) => ({
    ... { title : titleFn(context) },
    ... (detailsFn !== undefined ? { details : detailsFn(context)} : {}),
    ... (value?.image !== undefined ? { image : value?.image } : {}),
    ... (value?.url !== undefined ? { url : value?.url } : {}),
  });
}

export const card : RendererCompiler<BaseContent> = (content: CardContent) : CompiledRenderer => {
  const fn= ProductContentRenderer.compile(content?.body);
  const fn2 = getCardProps(content);
  return (context : RendererContext) => <Card {...fn2(context)}>{
    fn(context)
  }</Card>;
}
