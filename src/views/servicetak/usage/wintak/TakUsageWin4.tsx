import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { ServiceProductUsageCard } from "../helpers/ServiceProductUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { useTranslation, Trans } from "react-i18next";
import Wintak from "../../../../assets/icons/wintak.png";

import pic61 from "../../../../assets/takguides/wintak/Kuva61.png";
import pic62 from "../../../../assets/takguides/wintak/Kuva62.png";
import pic63 from "../../../../assets/takguides/wintak/Kuva63.png";

export function TakUsageWin4() {
  const { t , i18n} = useTranslation();
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
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title={<Trans i18nKey="takUsageWin4.serviceInfoCard.title" />}
              image={Wintak}
              details={
                <Trans
                  i18nKey="takUsageWin4.serviceInfoCard.details"
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
              title={<Trans i18nKey="takUsageWin4.unfoldableCard1.title" />}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin4.unfoldableCard1.step1"
                      components={{ br: <br /> }}
                    />
                  ),
                  imageSrc: pic61,
                  imageClasses: "m-3 w-[200px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin4.unfoldableCard1.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic62,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin4.unfoldableCard1.step3" />
                  ),
                  imageSrc: pic63,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin4.unfoldableCard1.step4"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin4.unfoldableCard1.step5"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="takUsageWin4.unfoldableCard1.step6"
                      components={{ em: <em /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="takUsageWin4.unfoldableCard1.step7" />
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win3"
          forwardUrl="/app/services/tak/usage"
          alterForward={t("TakUsageAndroid3.alterForward")}
        />
      </Layout>
    </div>
  );
}
