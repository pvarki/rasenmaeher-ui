import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic26 from "../../../../assets/takguides/itak/itakusage1.png";
import pic27 from "../../../../assets/takguides/itak/itakusage2.png";
import pic271 from "../../../../assets/takguides/itak/itakusage31.png";
import pic28 from "../../../../assets/takguides/itak/itakusage4.png";
import pic29 from "../../../../assets/takguides/itak/itakusage5.png";
import pic30 from "../../../../assets/takguides/itak/itakusage6.png";

export function TakUsageIos1() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakUsageIos1.navbarTitle")}
        backUrl="/app/services/tak/usage"
      >
        <StatusBar
          title={t("TakUsageIos1.statusBarTitle")}
          progressMax={1}
          progressNow={1}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakUsageIos1.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={t("TakUsageIos1.unfoldableCard1.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard1.step1" />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard1.step2" />
                  ),
                  imageSrc: pic26,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
            <UnfoldableCard
              title={t("TakUsageIos1.unfoldableCard2.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageIos1.unfoldableCard2.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageIos1.unfoldableCard2.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic27,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageIos1.unfoldableCard2.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic271,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  note: <Trans i18nKey="TakUsageIos1.unfoldableCard2.note" />,
                },
              ]}
            />
            <UnfoldableCard
              title={t("TakUsageIos1.unfoldableCard3.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard3.step1" />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard3.step2" />
                  ),
                  imageSrc: pic28,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard3.step3" />
                  ),
                  imageSrc: pic29,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard3.step4" />
                  ),
                  imageSrc: pic30,
                  imageClasses: "m-3 w-[400px]",
                  note: <Trans i18nKey="TakUsageIos1.unfoldableCard3.note" />,
                },
              ]}
            />
            <UnfoldableCard
              title={t("TakUsageIos1.unfoldableCard4.title")}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakUsageIos1.unfoldableCard4.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans i18nKey="TakUsageIos1.unfoldableCard4.step2" />
                  ),
                  imageSrc: pic28,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage"
          forwardUrl="/app/services/tak/usage"
          alterForward={t("TakUsageAndroid3.alterForward")}
        />
      </Layout>
    </div>
  );
}
