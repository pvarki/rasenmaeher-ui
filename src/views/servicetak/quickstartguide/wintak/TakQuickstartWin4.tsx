import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { Trans, useTranslation } from "react-i18next";
import Wintak from "../../../../assets/icons/wintak.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic28 from "../../../../assets/takguides/wintak/Kuva28.png";
import pic29 from "../../../../assets/takguides/wintak/Kuva29.png";
import pic30 from "../../../../assets/takguides/wintak/Kuva30.png";
import pic31 from "../../../../assets/takguides/wintak/Kuva31.png";

export function TakQuickstartWin4() {
  const { t } = useTranslation();
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartWin4.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartWin4.statusBarTitle")}
          progressMax={4}
          progressNow={4}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <Trans
                  i18nKey="TakQuickstartWin4.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.description1"
                  components={{
                    strong: <strong />,
                    span: <span />,
                    br: <br />,
                  }}
                />
              }
              image2Src={pic28}
              image2Classes="mx-auto pr-12 w-[200px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic29}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic29}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.description4"
                  components={{ strong: <strong /> }}
                />
              }
              image5Src={pic30}
              image5Classes="mx-auto pr-5 w-[300px] p-4"
              description5={
                <Trans i18nKey="TakQuickstartWin4.unfoldableCard1.description5" />
              }
              image6Src={pic31}
              image6Classes="mx-auto pr-5 w-[300px] p-4"
              description6={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard1.description6"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin4.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={t("TakQuickstartWin4.unfoldableCard2.description1")}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win3"
          forwardUrl="/app/services/tak/quickstart"
          alterForward={t("TakQuickstartWin4.alterForward")}
        />
      </Layout>
    </div>
  );
}
