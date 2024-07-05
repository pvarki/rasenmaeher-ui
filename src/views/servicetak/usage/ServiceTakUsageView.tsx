import { useEffect, useRef } from "react";
import android from "../../../assets/icons/android.svg";
import sanla from "../../../assets/heroimages/kiikarit.jpeg";
import apple from "../../../assets/icons/apple.svg";
import windows from "../../../assets/icons/windows.svg";
import { Layout } from "../../../components/Layout";
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { ServiceUsageCard } from "../../../components/ServiceUsageCard";
import { ServiceTakUsageCard } from "./helpers/ServiceTakUsageCard";
import { ServiceTakUsageAtCPCard } from "./helpers/ServiceTakUsageAtCPCard";
import { ServiceTakUsageByFighterCard } from "./helpers/ServiceTakUsageByFighterCard";
import { ServiceTakUsageFlowCard } from "./helpers/ServiceTakUsageFlowCard";
import { Trans, useTranslation } from "react-i18next";

export function ServiceTakUsageView() {
  const cardContentRef = useRef<HTMLDivElement | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 60);
  }, []);

  return (
    <div className="pb-10">
      <Layout
        showNavbar={true}
        showFooter={true}
        heroImage={sanla}
        navbarTitle={t("serviceTakUsageView.navbarTitle")}
        backUrl="/"
      >
        <div className="flex flex-col flex-shrink-0" ref={cardContentRef}>
          <CardsContainer>
            <ServiceInfoCard
              title={t("serviceTakUsageView.serviceInfoCardTitle")}
              details={
                <Trans
                  i18nKey="serviceTakUsageView.serviceInfoCardDetails"
                  components={{ strong: <strong /> }}
                />
              }
            />
          </CardsContainer>

          <ServiceUsageCard>
            <ServiceTakUsageCard />
            <ServiceTakUsageByFighterCard />
            <ServiceTakUsageAtCPCard />
            <ServiceTakUsageFlowCard />
          </ServiceUsageCard>

          <CardsContainer>
            <Card
              title={t("serviceTakUsageView.androidTitle")}
              image={android}
              url="/app/services/tak/usage/android1"
            />
            <Card
              title={t("serviceTakUsageView.iosTitle")}
              image={apple}
              url="/app/services/tak/usage/ios1"
            />
            <Card
              title={t("serviceTakUsageView.windowsTitle")}
              image={windows}
              url="/app/services/tak/usage/win1"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
