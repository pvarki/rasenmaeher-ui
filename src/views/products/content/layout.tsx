import { Layout } from "../../../components/Layout";
import { parseBoolean } from "../../../libs/rune/helpers/parseBoolean";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import {
  LayoutContent,
  LayoutContentProps,
} from "../types/LayoutContent";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";

function getLayoutProps( value: LayoutContent ) : (context : RendererContext) => LayoutContentProps {
  const navBarTitleFn = ProductContentRenderer.compile(value?.navbarTitle);
  return (context : RendererContext) => {
    return {
      ... (value?.showNavbar !== undefined ? { showNavbar : parseBoolean(value?.showNavbar) } : {}),
      ... (value?.showHeader !== undefined ? { showHeader : parseBoolean(value?.showHeader) } : {}),
      ... (value?.showFooter !== undefined ? { showFooter : parseBoolean(value?.showFooter) } : {}),
      ... (value?.showPublicFooter !== undefined ? { showPublicFooter : parseBoolean(value?.showPublicFooter) } : {}),
      ... (value?.navbarTitle !== undefined ? { navbarTitle : navBarTitleFn(context) } : {}),
      ... (value?.backUrl !== undefined ? { backUrl : value?.backUrl } : {}),
      ... (value?.heroImage !== undefined ? { heroImage : value?.heroImage } : {}),
    };
  };
}

export const layout : RendererCompiler<BaseContent> = (content: LayoutContent) : CompiledRenderer => {
  const fn = ProductContentRenderer.compile( content.body );
  const fn2 = getLayoutProps(content);
  return (context : RendererContext) => <Layout { ...fn2(context) }>{
    fn(context)
  }</Layout>;
}
