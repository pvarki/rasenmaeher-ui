import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic26 from "../../../../assets/takguides/itak/itakquickstart26.png";
import pic27 from "../../../../assets/takguides/itak/itakquickstart27.png";
import pic271 from "../../../../assets/takguides/itak/itakquickstart27-1.jpeg";
import pic28 from "../../../../assets/takguides/itak/itakquickstart28.png";

export function TakQuickstartIos5() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartIos5.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartIos5.statusBarTitle")}
          progressMax={5}
          progressNow={5}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakQuickstartIos5.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos5.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos5.unfoldableCard1.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic26,
                  imageClasses: "m-3 w-[300px]",
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos5.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos5.unfoldableCard2.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic271,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <Trans i18nKey="TakQuickstartIos5.unfoldableCard2.step2" />
                  ),
                  imageSrc: pic28,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos5.unfoldableCard2.step3"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  note: t("TakQuickstartIos5.unfoldableCard2.note"),
                },
              ]}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos5.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos5.unfoldableCard3.step1"
                      components={{ strong: <strong /> }}
                    />
                  ),
                  imageSrc: pic27,
                  imageClasses: "m-3 w-[300px]",
                },
                {
                  description: (
                    <Trans
                      i18nKey="TakQuickstartIos5.unfoldableCard3.step2"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios4"
          forwardUrl="/app/services/tak/quickstart"
          alterForward={t("TakQuickstartIos5.alterForward")}
        />
      </Layout>
    </div>
  );
}
