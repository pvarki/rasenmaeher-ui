import { ReactNode, Fragment } from "react";
import { Button } from "../../components/Button";
import { CardsContainer } from "../../components/CardsContainer";
import { FoldableCard } from "../../components/FoldableCard";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { StepProps } from "../../components/Step";
import { DropdownOsSelector } from "../../components/tak/DropdownOsSelector";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { parseOperatingSystem } from "../../hook/helpers/getOperatingSystem";
import { RendererContext } from "./RendererContextImpl";
import { CONTENT_SERVICE } from "./ContentService";
import { isBaseContent } from "./types/BaseContent";
import { isBaseParentContent } from "./types/BaseParentContent";
import { isButtonContent } from "./types/ButtonContent";
import { isCardsContainerContent } from "./types/CardsContainerContent";
import { Content } from "./types/Content";
import { ContentType } from "./types/ContentType";
import { isDropdownOsSelectorContent } from "./types/DropdownOsSelectorContent";
import { isFoldableCardContent } from "./types/FoldableCardContent";
import { RootContent } from "./types/RootContent";
import { isServiceInfoCardContent } from "./types/ServiceInfoCardContent";
import { isServiceProductUsageCardContent } from "./types/ServiceProductUsageCardContent";
import { StepContent } from "./types/StepContent";
import { isTakDownloadModalContent } from "./types/TakDownloadModalContent";
import { isUnfoldableCardContent } from "./types/UnfoldableCardContent";
import { isViewContent } from "./types/ViewContent";
import { ServiceTakUsageCard } from "../servicetak/usage/helpers/ServiceTakUsageCard";

/**
 * Renders dynamic product specific content from product integration API.
 */
export class ProductContentRenderer {

    /**
     *
     * @param value
     */
    public static prepareClassName (value: readonly string[] | undefined) : string {
        if (!value) return "";
        return value.join(' ');
    }

    /**
     *
     * @param value
     * @param context
     */
    public static prepareStep (
        value: StepContent,
        context : RendererContext,
    ): StepProps {
        return {
            imageSrc     : value?.image,
            imageLink    : value?.imageLink,
            imageClasses : this.prepareClassName(value?.classes),
            description  : this.render(value.description, context),
            note         : this.render(value.note, context)
        };
    }

    /**
     *
     * @param value
     * @param context
     */
    public static prepareSteps (
        value: readonly StepContent[],
        context : RendererContext,
    ): readonly StepProps[] {
        return value.map(
            (item : StepContent) : StepProps => this.prepareStep( item, context )
        );
    }

    /**
     *
     * @param content
     * @param context
     */
    public static render (
        content  : Content | readonly Content[] | null | undefined,
        context : RendererContext,
    ) : ReactNode {

        if (!content) {
            return <>{content}</>;
        }

        if (typeof content === "string") {
            return <>{context.t(content)}</>;
        }

        if (typeof content === "object" && Array.isArray(content)) {
            return <>{
                content.map((item: Content, index: number): ReactNode => {
                    return <Fragment key={`index:${index}`}>{ this.render(item, context) }</Fragment>
                })
            }</>;
        }

        if (!isBaseContent(content)) {
            return <>Unknown: {JSON.stringify(content, null, 2)}</>;
        }

        if (isViewContent(content)) {
            return this.render(content.body, context);
        }

        if (isCardsContainerContent(content)) {
            return <CardsContainer>{this.render(content?.body, context)}</CardsContainer>
        }

        if (isFoldableCardContent(content)) {
            return <FoldableCard
                title={content.title}
                imageSrc={content.image}
            >{this.render(content?.body, context)}</FoldableCard>
        }

        if (isServiceInfoCardContent(content)) {
            return <ServiceInfoCard
                title={this.render(content.title, context)}
                image={content.image}
                details={this.render(content?.details, context)}
            >{this.render(content?.body, context)}</ServiceInfoCard>
        }

        if (isUnfoldableCardContent(content)) {
            return <UnfoldableCard
                title={this.render(content.title, context)}
                steps={content.steps ? this.prepareSteps(content.steps ?? [], context) : undefined}
                content={content.content ? this.render(content.content, context) : undefined}
                styling={content?.classes ? this.prepareClassName(content?.classes ?? []) : undefined}
                initialOpen={content?.initialOpen}
            >{this.render(content?.body, context)}</UnfoldableCard>
        }

        if (isServiceProductUsageCardContent(content)) {
            return <ServiceTakUsageCard />
            // return <ServiceProductUsageCard
            //     title={content.title}
            //     content={this.render(content.content, context)}
            // >{this.render(content?.body, context)}</ServiceTakUsageCard>
        }

        if (isButtonContent(content)) {

            const where = content.onClick?.navigate;
            if (where) {
                return <Button
                    variant={content.variant}
                    onClick={() => context.navigate(where)}
                    styling={this.prepareClassName(content.classes)}
                >{this.render(content?.body, context)}</Button>
            }

            const modal = content.onClick?.modal;
            if (modal) {

                const item : RootContent | undefined = context.contentService.getItem(modal);

                if (isTakDownloadModalContent(item)) {
                    return <Button
                        variant={content.variant}
                        onClick={() => {
                            console.log(`Opening modal: ${modal}: `, item);
                            context.openDownloadModal(item)
                        }}
                        styling={this.prepareClassName(content.classes)}
                    >{this.render(content?.body, context)}</Button>
                }

                // FIXME: Implement 404 item or something like that
                console.log(`Unknown modal: ${modal}: `, item);
                return <Button
                    variant={content.variant}
                    onClick={() => {
                        console.warn(`Warning! The modal was unknown type: ${modal}: `, item);
                    }}
                    styling={this.prepareClassName(content.classes)}
                >{this.render(content?.body, context)}</Button>
            }

            console.warn(`Warning! Button did not have any action defined: `, content);
            return <Button
                variant={content.variant}
                onClick={() => {
                    console.warn(`Warning! Button did not have any action defined: `, content);
                }}
                styling={this.prepareClassName(content.classes)}
            >{this.render(content?.body, context)}</Button>

        }

        if (isDropdownOsSelectorContent(content)) {
            return <DropdownOsSelector
                initialOS={content?.initialOS ?? CONTENT_SERVICE.getSelectedOS() === 'iOS' ? 'iOS' : 'Other'}
                osOptions={content.options}
                onOSChange={(newOS: string) => CONTENT_SERVICE.setSelectedOS(parseOperatingSystem(newOS))}
            />
        }

        if (isBaseParentContent(content)) {

            if (content?.type === ContentType.DIV) {
                return <div className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</div>
            }

            if (content?.type === ContentType.SPAN) {
                return <span className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</span>
            }

            if (content?.type === ContentType.H1) {
                return <h1 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h1>
            }

            if (content?.type === ContentType.H2) {
                return <h2 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h2>
            }

            if (content?.type === ContentType.H3) {
                return <h3 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h3>
            }

            if (content?.type === ContentType.H4) {
                return <h4 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h4>
            }

            if (content?.type === ContentType.H5) {
                return <h5 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h5>
            }

            if (content?.type === ContentType.H6) {
                return <h6 className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</h6>
            }

            if (content?.type === ContentType.UL) {
                return <ul className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</ul>
            }

            if (content?.type === ContentType.LI) {
                return <li className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</li>
            }

            if (content?.type === ContentType.I) {
                return <i className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</i>
            }

            if (content?.type === ContentType.P) {
                return <p className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</p>
            }

            if (content?.type === ContentType.EM) {
                return <em className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</em>
            }

            if (content?.type === ContentType.STRONG) {
                return <strong className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</strong>
            }

            if (content?.type === ContentType.A) {
                return <a className={this.prepareClassName(content.classes)}>{this.render(content?.body, context)}</a>
            }

        }

        if (isBaseContent(content)) {

            if (content?.type === ContentType.HR) {
                return <hr className={this.prepareClassName(content.classes)} />
            }

            if (content?.type === ContentType.BR) {
                return <br className={this.prepareClassName(content.classes)} />
            }

            if (content?.type === ContentType.IMG) {
                return <img
                    className={this.prepareClassName(content.classes)}
                    alt={(content as unknown as {alt ?: string}).alt}
                    src={(content as unknown as {src ?: string}).src}
                />
            }

        }

        return <></>;
    }

}
