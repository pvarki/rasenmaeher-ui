import { Trans } from "react-i18next";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { ServiceTakUsageCard } from "./ServiceTakUsageCard";

export function ServiceTakUsageContents() {
  return (
    <ServiceInfoCard
      title={<Trans i18nKey="serviceTakUsageContents.title" />}
      details={
        <Trans
          i18nKey="serviceTakUsageContents.details"
          components={{ ul: <ul />, li: <li /> }}
        />
      }
    >
      <ServiceTakUsageCard />
    </ServiceInfoCard>
  );
}
