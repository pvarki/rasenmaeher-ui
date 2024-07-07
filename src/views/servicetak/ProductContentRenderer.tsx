import { ReactNode, Fragment } from "react";
import { Button } from "../../components/Button";
import { CardsContainer } from "../../components/CardsContainer";
import { FoldableCard } from "../../components/FoldableCard";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { StepProps } from "../../components/Step";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { isBaseContent } from "./types/BaseContent";
import { isBaseParentContent } from "./types/BaseParentContent";
import { isButtonContent } from "./types/ButtonContent";
import { isCardsContainerContent } from "./types/CardsContainerContent";
import { Content } from "./types/Content";
import { ContentType } from "./types/ContentType";
import { isFoldableCardContent } from "./types/FoldableCardContent";
import { isServiceInfoCardContent } from "./types/ServiceInfoCardContent";
import { isServiceProductUsageCardContent } from "./types/ServiceProductUsageCardContent";
import { StepContent } from "./types/StepContent";
import { isUnfoldableCardContent } from "./types/UnfoldableCardContent";
import { isViewContent } from "./types/ViewContent";
import { ServiceProductUsageCard } from "./usage/helpers/ServiceProductUsageCard";

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
     */
    public static prepareStep (value: StepContent): StepProps {
        return {
            imageSrc     : value?.image,
            imageLink    : value?.imageLink,
            imageClasses : this.prepareClassName(value?.classes),
            description  : this.render(value.description),
            note         : this.render(value.note)
        };
    }

    /**
     *
     * @param value
     */
    public static prepareSteps (value: readonly StepContent[]): readonly StepProps[] {
        return value.map(
            (item : StepContent) : StepProps => this.prepareStep( item )
        );
    }

    /**
     *
     * @param content
     */
    public static render (
        content: Content | readonly Content[] | null | undefined
    ) : ReactNode {

        if (!content) {
            return <>{content}</>;
        }

        if (typeof content === "string") {
            return <>{content}</>;
        }

        if (typeof content === "object" && Array.isArray(content)) {
            return <>{
                content.map((item: Content, index: number): ReactNode => {
                    return <Fragment key={`index:${index}`}>{ this.render(item) }</Fragment>
                })
            }</>;
        }

        if (!isBaseContent(content)) {
            return <>Unknown: {JSON.stringify(content, null, 2)}</>;
        }

        if (isViewContent(content)) {
            return this.render(content.body);
        }

        if (isCardsContainerContent(content)) {
            return <CardsContainer>{this.render(content?.body)}</CardsContainer>
        }

        if (isFoldableCardContent(content)) {
            return <FoldableCard
                title={content.title}
                imageSrc={content.image}
            >{this.render(content?.body)}</FoldableCard>
        }

        if (isServiceInfoCardContent(content)) {
            return <ServiceInfoCard
                title={this.render(content.title)}
                image={content.image}
                details={this.render(content?.details)}
            >{this.render(content?.body)}</ServiceInfoCard>
        }

        if (isUnfoldableCardContent(content)) {
            return <UnfoldableCard
                title={this.render(content.title)}
                steps={content.steps ? this.prepareSteps(content.steps ?? []) : undefined}
                content={content.content ? this.render(content.content) : undefined}
                styling={content?.classes ? this.prepareClassName(content?.classes ?? []) : undefined}
                initialOpen={content?.initialOpen}
            >{this.render(content?.body)}</UnfoldableCard>
        }

        if (isServiceProductUsageCardContent(content)) {
            return <ServiceProductUsageCard
                title={content.title}
                content={this.render(content.content)}
            >{this.render(content?.body)}</ServiceProductUsageCard>
        }

        if (isButtonContent(content)) {
            return <Button
                variant={content.variant}
                styling={this.prepareClassName(content.classes)}
            >{this.render(content?.body)}</Button>
        }

        // TODO:
        // if (isMultiDownloadModalContent(content)) {
        //     return <MultiDownloadModal
        //         initialOS={content.initialOS}
        //         osOptions={content.image}
        //         onOSChange={content.image}
        //     >{this.render(content?.body)}</MultiDownloadModal>
        // }

        // TODO:
        // if (isDropdownOsSelectorContent(content)) {
        //     return <DropdownOsSelector
        //         title={content.title}
        //         imageSrc={content.image}
        //     >{this.render(content?.body)}</DropdownOsSelector>
        // }

        if (isBaseParentContent(content)) {

            if (content?.type === ContentType.DIV) {
                return <div className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</div>
            }

            if (content?.type === ContentType.SPAN) {
                return <span className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</span>
            }

            if (content?.type === ContentType.H1) {
                return <h1 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h1>
            }

            if (content?.type === ContentType.H2) {
                return <h2 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h2>
            }

            if (content?.type === ContentType.H3) {
                return <h3 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h3>
            }

            if (content?.type === ContentType.H4) {
                return <h4 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h4>
            }

            if (content?.type === ContentType.H5) {
                return <h5 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h5>
            }

            if (content?.type === ContentType.H6) {
                return <h6 className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</h6>
            }

            if (content?.type === ContentType.UL) {
                return <ul className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</ul>
            }

            if (content?.type === ContentType.LI) {
                return <li className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</li>
            }

            if (content?.type === ContentType.I) {
                return <i className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</i>
            }

            if (content?.type === ContentType.P) {
                return <p className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</p>
            }

            if (content?.type === ContentType.EM) {
                return <em className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</em>
            }

            if (content?.type === ContentType.STRONG) {
                return <strong className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</strong>
            }

            if (content?.type === ContentType.A) {
                return <a className={this.prepareClassName(content.classes)}>{this.render(content?.body)}</a>
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
