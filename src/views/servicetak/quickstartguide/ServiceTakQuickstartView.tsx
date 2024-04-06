import { useEffect, useRef } from "react";
import android from "../../../assets/icons/android.svg";
import sanla from "../../../assets/heroimages/rakennettu3.jpeg";
import apple from "../../../assets/icons/apple.svg";
import windows from "../../../assets/icons/windows.svg";
import { Layout } from "../../../components/Layout";
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { Trans, useTranslation } from "react-i18next";

export function ServiceTakQuickstartView() {
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
        navbarTitle={t("serviceTakQuickstartView.navbarTitle")}
        backUrl="/"
      >
        <div ref={cardContentRef}>
          <CardsContainer>
            <ServiceInfoCard
              title={t("serviceTakQuickstartView.serviceInfoCardTitle")}
              details={
                <Trans
                  i18nKey="serviceTakQuickstartView.serviceInfoCardDetails"
                  components={{ strong: <strong />, span: <span /> }}
                />
              }
            />

            <Card
              title={t("serviceTakQuickstartView.androidTitle")}
              image={android}
              url="/app/services/tak/quickstart/android1"
            />
            <Card
              title={t("serviceTakQuickstartView.iosTitle")}
              image={apple}
              url="/app/services/tak/quickstart/ios1"
            />
            <Card
              title={t("serviceTakQuickstartView.windowsTitle")}
              image={windows}
              url="/app/services/tak/quickstart/win1"
            />
          </CardsContainer>
        </div>
      </Layout>
    </div>
  );
}
