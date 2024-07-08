import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageAtCPCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title={<Trans i18nKey="serviceTakUsageAtCPCard.title" />}
        initialOpen={false}
        description1={
          <Trans
            i18nKey="serviceTakUsageAtCPCard.description1"
            components={{ br: <br /> }}
          />
        }
        description2={
          <Trans
            i18nKey="serviceTakUsageAtCPCard.description2"
            components={{ strong: <strong /> }}
          />
        }
        description3={
          <Trans
            i18nKey="serviceTakUsageAtCPCard.description3"
            components={{ em: <em /> }}
          />
        }
        description4={<Trans i18nKey="serviceTakUsageAtCPCard.description4" />}
      />
    </div>
  );
}
