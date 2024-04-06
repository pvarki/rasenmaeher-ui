import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { Trans, useTranslation } from "react-i18next";
import ATAK from "../../../../assets/icons/tak-logo.png";
import pic1 from "../../../../assets/takguides/atak/atakusage1.png";
import pic3 from "../../../../assets/takguides/atak/atakusage3.png";
import pic31 from "../../../../assets/takguides/atak/atakusage3-1.png";
import pic4 from "../../../../assets/takguides/atak/atakusage4.png";
import pic5 from "../../../../assets/takguides/atak/atakusage5.png";
import pic6 from "../../../../assets/takguides/atak/atakusage6.png";
import pic7 from "../../../../assets/takguides/atak/atakusage7.png";
import pic8 from "../../../../assets/takguides/atak/atakusage8.png";
import pic9 from "../../../../assets/takguides/atak/atakusage9.png";

export function TakUsageAndroid2() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakUsageAndroid2.navbarTitle")}
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title={t("TakUsageAndroid2.statusBarTitle")}
          progressMax={3}
          progressNow={2}
        />
        <CardsContainer>
          <ServiceTakUsageCard />
        </CardsContainer>
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <Trans
                  i18nKey="TakUsageAndroid2.serviceInfoCard.details"
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
                  i18nKey="TakUsageAndroid2.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard2.step1"
                      components={{ strong: <strong />, br: <br /> }}
                    />
                  ),
                  imageSrc: pic1,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard2.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic3,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard2.step3"
                      components={{ br: <br /> }}
                    />
                  ),
                  imageSrc: pic31,
                  imageClasses: "m-3 w-[500px]",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakUsageAndroid2.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard3.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic4,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard3.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic5,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid2.unfoldableCard3.step3" />
                  ),
                  imageSrc: pic6,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard3.step4"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic7,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard3.step5"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic8,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageAndroid2.unfoldableCard3.step6"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic9,
                  imageClasses: "m-3 w-[500px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageAndroid2.unfoldableCard3.step7" />
                  ),
                  note: (
                    <Trans i18nKey="TakUsageAndroid2.unfoldableCard3.note" />
                  ),
                },
              ]}
            />

            <NavigateButtons
              backUrl="/app/services/tak/usage/android1"
              forwardUrl="/app/services/tak/usage/android3"
            />
          </div>
        </CardsContainer>
      </Layout>
    </div>
  );
}
