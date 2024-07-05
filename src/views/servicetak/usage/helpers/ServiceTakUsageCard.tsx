import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title={<Trans i18nKey="serviceTakUsageCard.title" />}
        initialOpen={false}
        content={
          <Trans
            i18nKey="serviceTakUsageCard.content"
            components={{
              strong: <strong />,
              em: <em />,
              ul: <ul />,
              li: <li />,
            }}
          />
        }
      />
    </div>
  );
}
