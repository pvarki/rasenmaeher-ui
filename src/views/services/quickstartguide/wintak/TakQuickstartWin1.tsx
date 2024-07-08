import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import pic1 from "../../../../assets/takguides/wintak/Kuva1.png";
import pic2 from "../../../../assets/takguides/wintak/Kuva2.png";
import pic3 from "../../../../assets/takguides/wintak/Kuva3.png";
import pic4 from "../../../../assets/takguides/wintak/Kuva4.png";
import pic5 from "../../../../assets/takguides/wintak/Kuva5.png";
import pic6 from "../../../../assets/takguides/wintak/Kuva6.png";
import pic7 from "../../../../assets/takguides/wintak/Kuva7.png";
import pic8 from "../../../../assets/takguides/wintak/Kuva8.png";

export function TakQuickstartWin1() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartWin1.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartWin1.statusBarTitle")}
          progressMax={4}
          progressNow={1}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <Trans
                  i18nKey="TakQuickstartWin1.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard1.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic1}
              image2Classes="mx-auto pr-12 w-[240px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard1.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic2}
              image3Classes="mx-auto pr-12 w-[240px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard1.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic3}
              image4Classes="mx-auto pr-12 w-[400px] p-4"
              description4={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard1.description4"
                  components={{ strong: <strong /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard2.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic4}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard2.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic5}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard2.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic8}
              image4Classes="mx-auto pr-5 w-[400px] p-4"
              description4={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard2.description4"
                  components={{ small: <small />, em: <em /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard3.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={pic6}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard3.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic7}
              image3Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin1.unfoldableCard3.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic8}
              image4Classes="mx-auto pr-5 w-[400px] p-4"
              description4={
                <Trans i18nKey="TakQuickstartWin1.unfoldableCard3.description4" />
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/win2"
        />
      </Layout>
    </div>
  );
}
