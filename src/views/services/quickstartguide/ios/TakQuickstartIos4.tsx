import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic21 from "../../../../assets/takguides/itak/itakquickstart21.png";
import pic22 from "../../../../assets/takguides/itak/itakquickstart22.png";
import pic23 from "../../../../assets/takguides/itak/itakquickstart23.png";
import pic24 from "../../../../assets/takguides/itak/itakqucikstart22.png";

export function TakQuickstartIos4() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartIos4.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartIos4.statusBarTitle")}
          progressMax={5}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakQuickstartIos4.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard1.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard1.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic22}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <Trans i18nKey="TakQuickstartIos4.unfoldableCard1.description3" />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard2.description1"
                  components={{ strong: <strong /> }}
                />
              }
              description2={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard2.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic23}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard3.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic21}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard3.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic24}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartIos4.unfoldableCard3.description3"
                  components={{ small: <small />, em: <em /> }}
                />
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios3"
          forwardUrl="/app/services/tak/quickstart/ios5"
        />
      </Layout>
    </div>
  );
}
