import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic1 from "../../../../assets/takguides/itak/itakquickstart1.png";
import pic2 from "../../../../assets/takguides/itak/itakquickstart2.png";
import pic3 from "../../../../assets/takguides/itak/itakquickstart3.png";
import pic4 from "../../../../assets/takguides/itak/itakquickstart4.png";
import pic5 from "../../../../assets/takguides/itak/itakquickstart5.png";
import pic7 from "../../../../assets/takguides/itak/itakquickstart7.png";

export function TakQuickstartIos2() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartIos2.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartIos2.statusBarTitle")}
          progressMax={5}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakQuickstartIos2.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard1.description1"
                  components={{ strong: <strong />, em: <em />, br: <br /> }}
                />
              }
              image2Src={pic1}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard2.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic2}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard2.description2"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard3.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic3}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard3.description2"
                  components={{
                    strong: <strong />,
                    small: <small />,
                    em: <em />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard4.title"
                  components={{ strong: <strong /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard4.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic4}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard4.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic5}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartIos2.unfoldableCard4.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic7}
              image4Classes="mx-auto pr-5 w-[240px] p-4"
              description4={
                <Trans i18nKey="TakQuickstartIos2.unfoldableCard4.description4" />
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios1"
          forwardUrl="/app/services/tak/quickstart/ios3"
        />
      </Layout>
    </div>
  );
}
