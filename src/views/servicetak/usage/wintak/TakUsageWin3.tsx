import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { useTranslation, Trans } from "react-i18next";
import Wintak from "../../../../assets/icons/wintak.png";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { ServiceProductUsageCard } from "../helpers/ServiceProductUsageCard";

export function TakUsageWin3() {
  const { t , i18n } = useTranslation();
  const productData : ProductData = useProductData(i18n.language);
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={<Trans i18nKey="takUsageWin3.navbarTitle" />}
        backUrl="/app/services/tak/usage"
      >
        <StatusBar
          title={t("takUsageWin3.navbarTitle")}
          progressMax={4}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title={<Trans i18nKey="takUsageWin3.serviceInfoCard.title" />}
              image={Wintak}
              details={
                <Trans
                  i18nKey="takUsageWin3.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            >
                <ServiceProductUsageCard
                    title={productData.usageCardTitle}
                    content={productData.usageCardContent}
                />
            </ServiceInfoCard>
            <UnfoldableCard
              title={<Trans i18nKey="takUsageWin3.unfoldableCard1.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin3.unfoldableCard1.step1"
                      components={{
                        strong: <strong />,
                        br: <br />,
                        em: <em />,
                      }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin3.unfoldableCard1.step2"
                      components={{
                        strong: <strong />,
                        br: <br />,
                        li: <li />,
                      }}
                    />
                  ),
                  note: (
                    <Trans
                      i18nKey="takUsageWin3.unfoldableCard1.note"
                      components={{ em: <em />, br: <br /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin3.unfoldableCard1.step3"
                      components={{ em: <em />, br: <br /> }}
                    />
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win2"
          forwardUrl="/app/services/tak/usage/win4"
        />
      </Layout>
    </div>
  );
}
