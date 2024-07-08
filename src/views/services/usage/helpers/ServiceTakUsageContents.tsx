import {
    Trans,
    useTranslation,
} from "react-i18next";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { ServiceProductUsageCard } from "./ServiceProductUsageCard";

export function ServiceTakUsageContents() {
  const { i18n} = useTranslation();
  const productData : ProductData = useProductData(i18n.language);
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
        <ServiceProductUsageCard
            title={productData.usageCardTitle}
            content={productData.usageCardContent}
        />
    </ServiceInfoCard>
  );
}
