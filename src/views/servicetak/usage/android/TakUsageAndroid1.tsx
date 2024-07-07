import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { Trans, useTranslation } from "react-i18next";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic27 from "../../../../assets/takguides/atak/27-BaseMap.png";
import pic28 from "../../../../assets/takguides/atak/28-Map.png";
import frame1 from "../../../../assets/takguides/atak/Frame-1.png";
import frame2 from "../../../../assets/takguides/atak/Frame-2.png";
import frame3 from "../../../../assets/takguides/atak/Frame-3.png";
import frame4 from "../../../../assets/takguides/atak/Frame-4.png";
import frame5 from "../../../../assets/takguides/atak/Frame-5.png";
import frame from "../../../../assets/takguides/atak/Frame.png";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { ServiceProductUsageCard } from "../helpers/ServiceProductUsageCard";

export function TakUsageAndroid1() {
  const { t , i18n } = useTranslation();
  const productData : ProductData = useProductData(i18n.language);
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakUsageAndroid1.navbarTitle")}
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title={t("TakUsageAndroid1.statusBarTitle")}
          progressMax={3}
          progressNow={1}
        />
        <CardsContainer>
          <ServiceProductUsageCard
              title={productData.usageCardTitle}
              content={productData.usageCardContent}
          />
        </CardsContainer>
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakUsageAndroid1.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid1.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard1.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic27,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard1.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard1.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame1,
                  imageClasses: "align-right w-[35px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard1.step4"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame2,
                  imageClasses: "align-right w-[50px]",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid1.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard2.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame3,
                  imageClasses: "align-right w-[40px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard2.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame4,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid1.unfoldableCard2.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: frame5,
                  imageClasses: "align-right w-[50px]",
                },
                {
                  imageSrc: pic28,
                  imageClasses: "w-[300px]",
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/Usage"
          forwardUrl="/app/services/tak/Usage/android2"
        />
      </Layout>
    </div>
  );
}
