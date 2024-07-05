import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageByFighterCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title={<Trans i18nKey="serviceTakUsageByFighterCard.title" />}
        initialOpen={false}
        description1={
          <Trans i18nKey="serviceTakUsageByFighterCard.description1" />
        }
        description2={
          <Trans i18nKey="serviceTakUsageByFighterCard.description2" />
        }
        description3={
          <Trans
            i18nKey="serviceTakUsageByFighterCard.description3"
            components={{ strong: <strong /> }}
          />
        }
        description4={
          <Trans i18nKey="serviceTakUsageByFighterCard.description4" />
        }
      />
    </div>
  );
}
