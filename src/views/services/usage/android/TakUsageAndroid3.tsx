import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { ProductData } from "../../ProductData";
import { useProductData } from "../../useProductData";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic1 from "../../../../assets/takguides/atak/atakusage10.png";
import pic2 from "../../../../assets/takguides/atak/atakusage11.png";
import pic3 from "../../../../assets/takguides/atak/atakusage12.png";
import pic4 from "../../../../assets/takguides/atak/atakusage13.png";
import pic5 from "../../../../assets/takguides/atak/atakusage14.png";
import pic6 from "../../../../assets/takguides/atak/atakusage15.png";
import pic7 from "../../../../assets/takguides/atak/atakusage16.png";
import { ServiceProductUsageCard } from "../helpers/ServiceProductUsageCard";

export function TakUsageAndroid3() {
  const { t , i18n } = useTranslation();
  const productData : ProductData = useProductData(i18n.language);
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakUsageAndroid3.navbarTitle")}
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title={t("TakUsageAndroid3.statusBarTitle")}
          progressMax={3}
          progressNow={3}
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
                  i18nKey="TakUsageAndroid3.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid2.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard1.step1"
                      components={{ strong: <strong />, br: <br /> }}
                    />
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[300px]",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid3.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid3.unfoldableCard2.description1"
                      components={{ strong: <strong />, br: <br /> }}
                    />
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard2.description2" />
                  ),
                  imageSrc: pic2,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard2.description3" />
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid3.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description1" />
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description2" />
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description3" />
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description4" />
                  ),
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description5" />
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description6" />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid3.unfoldableCard3.description7" />
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/android2"
          forwardUrl="/app/services/tak/usage"
          alterForward={t("TakUsageAndroid3.alterForward")}
        />
      </Layout>
    </div>
  );
}
