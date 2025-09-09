import { Trans } from "react-i18next";
import { getContentI18nNamespace } from "../../../i18n";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { TranslateContent } from "../../../libs/rune/types/TranslateContent";

export const translate : RendererCompiler<BaseContent> = ( content: TranslateContent) : CompiledRenderer => {
  const body = content?.body ?? '';
  return (context) => (
    <Trans
      i18nKey={body}
      components={{
        strong: <strong />,
        br: <br />,
        em: <em />,
        ul: <ul />,
        ol: <ol />,
        li: <li />,
        h1: <h1 />,
        h2: <h2 />,
        h3: <h3 />,
        h4: <h4 />,
        h5: <h5 />,
        code: <code />,
        pre: <pre />,
        h6: <h6 />,
        a: <a />,
        span: <span />,
        small: <small />,
      }}
      ns={getContentI18nNamespace(context.contentService.getName())}
    />
  );
}
