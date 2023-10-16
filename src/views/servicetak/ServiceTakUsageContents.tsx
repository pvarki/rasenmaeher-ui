import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { ServiceTakUsageCard } from "./ServiceTakUsageCard";

interface ServiceTakUsageContentsProps {
  details?: string;
}

export function ServiceTakUsageContents({ details }: ServiceTakUsageContentsProps) {
  const defaultDetails = '<ul>\
    <li>Liikuta karttaa ja näe omat</li>\
    <li>Ota käyttöön Data Sync</li>\
    <li>Tee havaintoja</li>\
    <li>Vastaanota Recon Feed</li>\
  </ul>';

  return (
    <ServiceInfoCard
      title='Ohjeen osat'
      details={details || defaultDetails}
    >
      <ServiceTakUsageCard />
    </ServiceInfoCard>
  );
}
