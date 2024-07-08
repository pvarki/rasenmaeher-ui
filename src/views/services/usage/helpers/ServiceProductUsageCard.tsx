import { ReactNode } from "react";
import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export interface ServiceProductUsageCardProps {
    readonly title: string;
    readonly content ?: string | ReactNode;
    readonly children ?: ReactNode;
}

export function ServiceProductUsageCard(
    props: ServiceProductUsageCardProps,
) {
  const title = props.title;
  const children = props.children;
  const content : string | ReactNode | undefined = props.content;
  return (
    <div className="service-product-usage-card w-full m-1 p-0">
      <UnfoldableCard
        title={title}
        initialOpen={false}
        content={
            typeof content === "string" ? (
                <Trans
                    i18nKey={content}
                    components={{
                        strong: <strong />,
                        em: <em />,
                        ul: <ul />,
                        li: <li />,
                    }}
                />
            ) : content
        }
      />
      {children}
    </div>
  );
}
