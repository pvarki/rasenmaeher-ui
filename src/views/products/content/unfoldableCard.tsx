import { StepProps } from "../../../components/Step";
import { UnfoldableCard as UnfoldableCard2 } from "../../../components/UnfoldableCard2";
import { ProductContentRenderer } from "../../../libs/rune/ProductContentRenderer";
import { RendererContext } from "../../../libs/rune/RendererContextImpl";
import { BaseContent } from "../../../libs/rune/types/BaseContent";
import { CompiledRenderer } from "../../../libs/rune/types/CompiledRenderer";
import { RendererCompiler } from "../../../libs/rune/types/RendererCompiler";
import { StepContent } from "../types/StepContent";
import { UnfoldableCardContent } from "../types/UnfoldableCardContent";

/**
 *
 * @param value
 */
function prepareStep(
  value: StepContent,
): (context: RendererContext) => StepProps {
  const descriptionFn = ProductContentRenderer.compile(value.description);
  const noteFn = ProductContentRenderer.compile(value.note);
  const imageClassesFn = ProductContentRenderer.prepareClassName(
    value?.classes,
  );
  return (context: RendererContext) => {
    return {
      imageSrc: value?.image,
      imageLink: value?.imageLink,
      imageClasses: imageClassesFn(context),
      description: descriptionFn(context),
      note: noteFn(context),
    };
  };
}

/**
 *
 * @param value
 */
function prepareSteps(
  value: readonly StepContent[],
): (context: RendererContext) => readonly StepProps[] {
  const fns = value.map((item) => prepareStep(item));
  return (context: RendererContext) => {
    return fns.map((fn): StepProps => fn(context));
  };
}

export const unfoldableCard: RendererCompiler<BaseContent> = (
  content: UnfoldableCardContent,
): CompiledRenderer => {
  const titleFn = ProductContentRenderer.compile(content.title);
  const contentFn = content.content
    ? ProductContentRenderer.compile(content.content)
    : () => undefined;
  const bodyFn = ProductContentRenderer.compile(content?.body);
  const stepsFn = content.steps ? prepareSteps(content.steps ?? []) : undefined;
  const stylingFn = content?.classes
    ? ProductContentRenderer.prepareClassName(content?.classes ?? [])
    : undefined;
  return (context: RendererContext) => (
    <UnfoldableCard2
      title={titleFn(context)}
      steps={stepsFn ? stepsFn(context) : undefined}
      content={contentFn(context)}
      styling={stylingFn ? stylingFn(context) : undefined}
      initialOpen={content?.initialOpen}
    >
      {bodyFn(context)}
    </UnfoldableCard2>
  );
};
