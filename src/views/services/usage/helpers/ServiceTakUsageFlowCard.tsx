import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import takusageflow from "../../../../assets/takguides/takusageflow.svg";

export function ServiceTakUsageFlowCard() {
  return (
    <div className="w-full m-2 p-0">
      <UnfoldableCard
        title={<Trans i18nKey="serviceTakUsageFlowCard.title" />}
        initialOpen={false}
        imageSrc={takusageflow}
        imageClasses="w-[500px]"
        description1={
          <Trans
            i18nKey="serviceTakUsageFlowCard.description1"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              li: <li />,
            }}
          />
        }
        description2={
          <Trans
            i18nKey="serviceTakUsageFlowCard.description2"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              li: <li />,
            }}
          />
        }
        description3={
          <Trans
            i18nKey="serviceTakUsageFlowCard.description3"
            components={{ strong: <strong />, small: <small />, li: <li /> }}
          />
        }
        description4={
          <Trans
            i18nKey="serviceTakUsageFlowCard.description4"
            components={{ small: <small /> }}
          />
        }
      />
    </div>
  );
}
