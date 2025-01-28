import { ReactNode, Fragment } from "react";
import { Trans } from "react-i18next";
import { isBoolean } from "tailwind-variants/dist/utils";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { FoldableCard } from "../../components/FoldableCard";
import { Layout } from "../../components/Layout";
import {
    NavigateButtons,
    NavigateButtonsProps,
} from "../../components/NavigateButtons";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import {
    StatusBar,
    StatusBarProps,
} from "../../components/StatusBar";
import { StepProps } from "../../components/Step";
import { DropdownOsSelector } from "../../components/tak/DropdownOsSelector";
import { UnfoldableCard as UnfoldableCard2 } from "../../components/UnfoldableCard2";
import { parseOperatingSystem } from "../../hook/helpers/getOperatingSystem";
import { I18N_CONTENT_SERVICE_NS_PREFIX } from "../../i18n";
import { DOWNLOAD_OPTIONS_SERVICE } from "./ContentService";
import { isArray } from "./helpers/isArray";
import { isString } from "./helpers/isString";
import { RendererContext } from "./RendererContextImpl";
import { isBaseContent } from "./types/BaseContent";
import {
    isBaseParentContent,
} from "./types/BaseParentContent";
import { isButtonContent } from "./types/ButtonContent";
import {
    CardContent,
    CardContentProps,
    isCardContent,
} from "./types/CardContent";
import { isComponentContent } from "./types/ComponentContent";
import { Content } from "./types/Content";
import { ContentType } from "./types/ContentType";
import { isDropdownOsSelectorContent } from "./types/DropdownOsSelectorContent";
import { isFoldableCardContent } from "./types/FoldableCardContent";
import {
    isLayoutContent,
    LayoutContent,
    LayoutContentProps,
} from "./types/LayoutContent";
import {
    isNavigateButtonsContent,
    NavigateButtonsContent,
} from "./types/NavigateButtonsContent";
import { RootContent } from "./types/RootContent";
import { isServiceInfoCardContent } from "./types/ServiceInfoCardContent";
import {
    isStatusBarContent,
    StatusBarContent,
} from "./types/StatusBarContent";
import { StepContent } from "./types/StepContent";
import { isTakDownloadModalContent } from "./types/TakDownloadModalContent";
import { isUnfoldableCardContent } from "./types/UnfoldableCardContent";
import { isViewContent } from "./types/ViewContent";

/**
 * Renders dynamic product specific content from product integration API.
 */
export class ProductContentRenderer {

    private static ComponentParamPrefix = "Component.Param.";

    /**
     *
     * @param value
     * @param context
     */
    public static prepareClassName (
        value: readonly string[] | undefined,
        context : RendererContext,
    ) : string {
        if (!value) return "";

        return value.map((item: string) : string => {
            if (item.startsWith(this.ComponentParamPrefix) && context?.componentContent && context?.stateContent) {
                const key = item.substring(this.ComponentParamPrefix.length)
                const data : {[key: string]: Content | readonly Content[] | null | undefined} = context.stateContent as unknown as {[key: string]: Content | readonly Content[] | null | undefined};
                if (Object.prototype.hasOwnProperty.call(data, key) && isString(data[key])) {
                    return data[key] as unknown as string
                }
            }
            return item
        }).join(' ');
    }

    /**
     *
     * @param value
     * @param context
     */
    public static prepareImgAlt (
        value: string | undefined,
        context : RendererContext,
    ) : string {
        if (!value) return "";
        if (value.startsWith(this.ComponentParamPrefix) && context?.componentContent && context?.stateContent) {
            const key = value.substring(this.ComponentParamPrefix.length)
            const data : {[key: string]: Content | readonly Content[] | null | undefined} = context.stateContent as unknown as {[key: string]: Content | readonly Content[] | null | undefined};
            if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
                if (isString(data[key])) {
                    return data[key] as unknown as string
                }
            }
        }
        return value
    }

    /**
     *
     * @param value
     * @param context
     */
    public static prepareAHref (
        value: string | undefined,
        context : RendererContext,
    ) : string {
        if (!value) return "";
        if (value.startsWith(this.ComponentParamPrefix) && context?.componentContent && context?.stateContent) {
            const key = value.substring(this.ComponentParamPrefix.length)
            const data : {[key: string]: Content | readonly Content[] | null | undefined} = context.stateContent as unknown as {[key: string]: Content | readonly Content[] | null | undefined};
            if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
                if (isString(data[key])) {
                    return data[key] as unknown as string
                }
            }
        }
        return value
    }

    /**
     *
     * @param value
     * @param context
     */
    public static prepareImgSrc (
        value: string | undefined,
        context : RendererContext,
    ) : string {
        if (!value) return "";
        if (value.startsWith(this.ComponentParamPrefix) && context?.componentContent && context?.stateContent) {
            const key = value.substring(this.ComponentParamPrefix.length)
            const data : {[key: string]: Content | readonly Content[] | null | undefined} = context.stateContent as unknown as {[key: string]: Content | readonly Content[] | null | undefined};
            if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
                if (isString(data[key])) {
                    return data[key] as unknown as string
                }
            }
        }
        return value
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
            imageClasses : this.prepareClassName(value?.classes, context),
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
        content : Content | readonly Content[] | null | undefined,
        context : RendererContext,
    ) : ReactNode {

        if (!content) {
            return <>{content}</>;
        }

        if (isString(content)) {

            if (content.startsWith(this.ComponentParamPrefix) && context?.componentContent && context?.stateContent) {
                const key = content.substring(this.ComponentParamPrefix.length)
                const data : {[key: string]: Content | readonly Content[] | null | undefined} = context.stateContent as unknown as {[key: string]: Content | readonly Content[] | null | undefined};
                if (Object.prototype.hasOwnProperty.call(data, key) && data[key]) {
                    return this.render(data[key], context);
                }
            }

            return <Trans
                i18nKey={content}
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
                    h6: <h6 />,
                    a: <a />,
                    span: <span />,
                    small: <small />,
                }}
                ns={I18N_CONTENT_SERVICE_NS_PREFIX+context.contentService.getName()}
            />;
        }

        if (isArray(content)) {
            return <>{
                (content as readonly Content[]).map(
                    (item: Content, index: number): ReactNode =>
                        <Fragment key={ `index:${ index }` }>{
                            this.render( item, context )
                        }</Fragment>
                )
            }</>;
        }

        if (!isBaseContent(content)) {
            return <>Unknown: {JSON.stringify(content, null, 2)}</>;
        }

        if (isViewContent(content)) {
            return this.render(content.body, context);
        }

        if (isLayoutContent(content)) {
            return <Layout { ...this._getLayoutProps(content, context) }>{
                this.render(content?.body, context)
            }</Layout>;
        }

        if (isComponentContent(content)) {
            return this.render(content.body, context);
        }

        if (isCardContent(content)) {
            return <Card {...this._getCardProps(content, context)}>{
                this.render(content?.body, context)
            }</Card>;
        }

        if (isNavigateButtonsContent(content)) {
            return <NavigateButtons {...this._getNavigateButtonsProps(content)} />;
        }

        if (isStatusBarContent(content)) {
            return <StatusBar {...this._getStatusBarProps(content, context)} />;
        }

        if (content?.type === ContentType.COMPONENT_CHILDREN) {
            if (context.stateContent === undefined) {
                console.warn(`Warning! No parent found for: ${content?.type}`);
                return <></>;
            }
            if (isBaseParentContent(context.stateContent)) {
                return this.render(context.stateContent.body, context.createContextWithoutParent());
            }
            console.warn(`Warning! No body found for: ${content?.type}: `, context.stateContent);
            return <></>;
        }

        if (isFoldableCardContent(content)) {
            return <FoldableCard
                title={content.title}
                imageSrc={content.image}
            >{this.render(content?.body, context)}</FoldableCard>;
        }

        if (isServiceInfoCardContent(content)) {
            return <ServiceInfoCard
                title={this.render(content.title, context)}
                image={content.image}
                details={this.render(content?.details, context)}
            >{this.render(content?.body, context)}</ServiceInfoCard>;
        }

        if (isUnfoldableCardContent(content)) {
            return <UnfoldableCard2
                title={this.render(content.title, context)}
                steps={content.steps ? this.prepareSteps(content.steps ?? [], context) : undefined}
                content={content.content ? this.render(content.content, context) : undefined}
                styling={content?.classes ? this.prepareClassName(content?.classes ?? [], context) : undefined}
                initialOpen={content?.initialOpen}
            >{this.render(content?.body, context)}</UnfoldableCard2>;
        }

        if (isButtonContent(content)) {

            const action = isString(content.onClick) ? content.onClick : undefined;
            if (action) {
                return <Button
                    variant={content.variant}
                    onClick={() => {
                        if (Object.prototype.hasOwnProperty.call(context.contentActions, action)) {
                            context.contentActions[action]()
                        }
                    }}
                    styling={this.prepareClassName(content.classes, context)}
                >{this.render(content?.body, context)}</Button>
            }

            const where = content.onClick?.navigate;
            if (where) {
                return <Button
                    variant={content.variant}
                    onClick={() => context.navigate(where)}
                    styling={this.prepareClassName(content.classes, context)}
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
                        styling={this.prepareClassName(content.classes, context)}
                    >{this.render(content?.body, context)}</Button>
                }

                // FIXME: Implement 404 item or something like that
                console.log(`Unknown modal: ${modal}: `, item);
                return <Button
                    variant={content.variant}
                    onClick={() => {
                        console.warn(`Warning! The modal was unknown type: ${modal}: `, item);
                    }}
                    styling={this.prepareClassName(content.classes, context)}
                >{this.render(content?.body, context)}</Button>
            }

            console.warn(`Warning! Button did not have any action defined: `, content);
            return <Button
                variant={content.variant}
                onClick={() => {
                    console.warn(`Warning! Button did not have any action defined: `, content);
                }}
                styling={this.prepareClassName(content.classes, context)}
            >{this.render(content?.body, context)}</Button>

        }

        if (isDropdownOsSelectorContent(content)) {
            return <DropdownOsSelector
                initialOS={content?.initialOS ?? DOWNLOAD_OPTIONS_SERVICE.getSelectedOS() === 'iOS' ? 'iOS' : 'Other'}
                osOptions={content.options}
                onOSChange={(newOS: string) => DOWNLOAD_OPTIONS_SERVICE.setSelectedOS(parseOperatingSystem(newOS))}
            />
        }

        if (isBaseParentContent(content)) {

            if (content?.type === ContentType.DIV) {
                return <div className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</div>
            }

            if (content?.type === ContentType.SPAN) {
                return <span className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</span>
            }

            if (content?.type === ContentType.H1) {
                return <h1 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h1>
            }

            if (content?.type === ContentType.H2) {
                return <h2 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h2>
            }

            if (content?.type === ContentType.H3) {
                return <h3 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h3>
            }

            if (content?.type === ContentType.H4) {
                return <h4 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h4>
            }

            if (content?.type === ContentType.H5) {
                return <h5 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h5>
            }

            if (content?.type === ContentType.H6) {
                return <h6 className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</h6>
            }

            if (content?.type === ContentType.UL) {
                return <ul className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</ul>
            }

            if (content?.type === ContentType.LI) {
                return <li className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</li>
            }

            if (content?.type === ContentType.BLOCKQUOTE) {
                return <blockquote className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</blockquote>
            }

            if (content?.type === ContentType.OL) {
                return <ol className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</ol>
            }

            if (content?.type === ContentType.PRE) {
                return <pre className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</pre>
            }

            if (content?.type === ContentType.TABLE) {
                return <table className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</table>
            }

            if (content?.type === ContentType.THEAD) {
                return <thead className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</thead>
            }

            if (content?.type === ContentType.TBODY) {
                return <tbody className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</tbody>
            }

            if (content?.type === ContentType.TFOOT) {
                return <tfoot className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</tfoot>
            }

            if (content?.type === ContentType.TR) {
                return <tr className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</tr>
            }

            if (content?.type === ContentType.TH) {
                return <th className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</th>
            }

            if (content?.type === ContentType.B) {
                return <b className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</b>
            }

            if (content?.type === ContentType.U) {
                return <u className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</u>
            }

            if (content?.type === ContentType.CODE) {
                return <code className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</code>
            }

            if (content?.type === ContentType.DEL) {
                return <del className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</del>
            }

            if (content?.type === ContentType.SUP) {
                return <sup className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</sup>
            }

            if (content?.type === ContentType.SUB) {
                return <sub className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</sub>
            }

            if (content?.type === ContentType.AUDIO) {
                return <audio className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</audio>
            }

            if (content?.type === ContentType.VIDEO) {
                return <video className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</video>
            }

            if (content?.type === ContentType.I) {
                return <i className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</i>
            }

            if (content?.type === ContentType.P) {
                return <p className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</p>
            }

            if (content?.type === ContentType.EM) {
                return <em className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</em>
            }

            if (content?.type === ContentType.HEADER) {
                return <header className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</header>
            }

            if (content?.type === ContentType.MAIN) {
                return <main className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</main>
            }

            if (content?.type === ContentType.NAV) {
                return <nav className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</nav>
            }

            if (content?.type === ContentType.FOOTER) {
                return <footer className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</footer>
            }

            if (content?.type === ContentType.SECTION) {
                return <section className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</section>
            }

            if (content?.type === ContentType.ARTICLE) {
                return <article className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</article>
            }

            if (content?.type === ContentType.STRONG) {
                return <strong className={this.prepareClassName(content.classes, context)}>{this.render(content?.body, context)}</strong>
            }

            if (content?.type === ContentType.A) {
                return (
                    <a className={this.prepareClassName(content.classes, context)}
                       href={ this.prepareAHref((content as unknown as {href ?: string}).href, context) }
                    >{this.render(content?.body, context)}</a>
                );
            }

        }

        if (isBaseContent(content)) {

            if (content?.type === ContentType.HR) {
                return <hr className={this.prepareClassName(content.classes, context)} />
            }

            if (content?.type === ContentType.BR) {
                return <br className={this.prepareClassName(content.classes, context)} />
            }

            if (content?.type === ContentType.IMG) {
                return <img
                    className={this.prepareClassName(content.classes, context)}
                    alt={ this.prepareImgAlt((content as unknown as {alt ?: string}).alt, context) }
                    src={ this.prepareImgSrc((content as unknown as {src ?: string}).src, context) }
                />
            }

        }

        // Implements user defined components
        const component = context.contentService.getComponent(content.type);
        if (component) {
            return <>{this.render(component, context.createComponentContext(component, content))}</>
        }

        console.warn(`Warning! Unimplemented content type: ${content?.type}`);
        return <></>;
    }

    private static _getCardProps( value: CardContent, context : RendererContext ) : CardContentProps {
        return {
            ... { title : this.render(value?.title, context) },
            ... (value?.details !== undefined ? { details : this.render(value?.details, context)} : {}),
            ... (value?.image !== undefined ? { image : value?.image } : {}),
            ... (value?.url !== undefined ? { url : value?.url } : {}),
        };
    }

    private static _getNavigateButtonsProps( value: NavigateButtonsContent ) : NavigateButtonsProps {
        return {
            ... { backUrl : value.backUrl },
            ... { forwardUrl : value.forwardUrl },
            ... (value?.alterBack !== undefined ? { alterBack : value?.alterBack } : {}),
            ... (value?.alterForward !== undefined ? { alterForward : value?.alterForward } : {}),
        };
    }

    private static _getStatusBarProps( value: StatusBarContent, context : RendererContext ) : StatusBarProps {
        return {
            ... { title : this.render(value?.title, context)  },
            ... { progressMax : parseInteger(value.progressMax) ?? 1 },
            ... { progressNow : parseInteger(value.progressNow) ?? 1 },
        };
    }

    private static _getLayoutProps( value: LayoutContent, context : RendererContext ) : LayoutContentProps {
        return {
            ... (value?.showNavbar !== undefined ? { showNavbar : parseBoolean(value?.showNavbar) } : {}),
            ... (value?.showHeader !== undefined ? { showHeader : parseBoolean(value?.showHeader) } : {}),
            ... (value?.showFooter !== undefined ? { showFooter : parseBoolean(value?.showFooter) } : {}),
            ... (value?.showPublicFooter !== undefined ? { showPublicFooter : parseBoolean(value?.showPublicFooter) } : {}),
            ... (value?.navbarTitle !== undefined ? { navbarTitle : this.render(value?.navbarTitle, context) } : {}),
            ... (value?.backUrl !== undefined ? { backUrl : value?.backUrl } : {}),
            ... (value?.heroImage !== undefined ? { heroImage : value?.heroImage } : {}),
        };
    }

}

function parseBoolean (value: unknown) : boolean {
    if (isString(value)) {
        return value.toLowerCase() == "true"
    }
    if (isBoolean(value)) {
        return value == true
    }
    return false
}

function parseInteger (value: unknown) : number | undefined {
    if (isString(value)) {
        return parseInt(value, 10);
    }
    return undefined
}
