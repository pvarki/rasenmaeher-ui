import { Button } from "../../../components/Button";
import { isString } from "../../../libs/rune/helpers/isString";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { ButtonContent } from "../types/ButtonContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { RootContent } from "../../../libs/rune/types/RootContent";
import { isTakDownloadModalContent } from "../types/TakDownloadModalContent";

export const button : RendererCompiler<BaseContent> = (content: ButtonContent) : CompiledRenderer => {
  const action = isString(content.onClick) ? content.onClick : undefined;
  if (action) {
    const bodyFn = ProductContentRenderer.compile(content?.body);
    const stylingFn = ProductContentRenderer.prepareClassName(content.classes);
    return (context : RendererContext) => <Button
      variant={content.variant}
      onClick={() => {
        if (Object.prototype.hasOwnProperty.call(context.contentActions, action)) {
          context.contentActions[action]()
        }
      }}
      styling={stylingFn(context)}
    >{bodyFn(context)}</Button>
  }

  const where = content.onClick?.navigate;
  if (where) {
    const bodyFn = ProductContentRenderer.compile(content?.body);
    const stylingFn = ProductContentRenderer.prepareClassName(content.classes);
    return (context : RendererContext) => <Button
      variant={content.variant}
      onClick={() => context.navigate(where)}
      styling={stylingFn(context)}
    >{bodyFn(context)}</Button>
  }

  const modal = content.onClick?.modal;
  if (modal) {

    const bodyFn = ProductContentRenderer.compile(content?.body);
    const stylingFn = ProductContentRenderer.prepareClassName(content.classes);

    return (context : RendererContext) => {
      const item : RootContent | undefined = context.contentService.getItem(modal);

      if (isTakDownloadModalContent(item)) {
        return <Button
          variant={content.variant}
          onClick={() => {
            console.log(`Opening modal: ${modal}`);
            context.open(item);
          }}
          styling={stylingFn(context)}
        >{bodyFn(context)}</Button>
      }

      // FIXME: Implement 404 item or something like that
      console.log(`Unknown modal: ${modal}: `, item);
      return <Button
        variant={content.variant}
        onClick={() => {
          console.warn(`Warning! The modal was unknown type: ${modal}: `, item);
        }}
        styling={stylingFn(context)}
      >{bodyFn(context)}</Button>

    };
  }

  const bodyFn = ProductContentRenderer.compile(content?.body);
  const stylingFn = ProductContentRenderer.prepareClassName(content.classes);

  console.warn(`Warning! Button did not have any action defined: `, content);
  return (context : RendererContext) => <Button
    variant={content.variant}
    onClick={() => {
      console.warn(`Warning! Button did not have any action defined: `, content);
    }}
    styling={stylingFn(context)}
  >{bodyFn(context)}</Button>
}
