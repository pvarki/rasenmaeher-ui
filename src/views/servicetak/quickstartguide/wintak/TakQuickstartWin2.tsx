import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import windownload from "../../../../assets/icons/windownload.svg";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "../../../../components/Button";
import { useDownloadTakZipModal } from "../../../../components/tak/DownloadTakZipModal";
import LoadingComponent from "../../../../components/Loading/LoadingComponent";
import pic9 from "../../../../assets/takguides/wintak/Kuva9.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva10.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva11.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva12.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva13.png";
import pic14 from "../../../../assets/takguides/wintak/Kuva13-1.png";

export function TakQuickstartWin2() {
  const { t } = useTranslation();
  const { openDownloadModal, loading } = useDownloadTakZipModal();
  if (loading) {
    return <LoadingComponent text={t("takZipDownload.iAmDownloading")} />;
  }
  const handleDownloadButtonClick = () => {
    (openDownloadModal as () => void)();
  };
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle={t("TakQuickstartWin2.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartWin2.statusBarTitle")}
          progressMax={4}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <Trans
                  i18nKey="TakQuickstartWin2.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard1.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard1.description1"
                  components={{ strong: <strong /> }}
                />
              }
              image2Src={windownload}
              image2Link="https://arkipublic.blob.core.windows.net/ohjelmistot/WinTAK-CIV-latest.zip"
              image2Classes="w-[200px]"
              note={t("TakQuickstartWin2.unfoldableCard1.note")}
            />
            <UnfoldableCard
              title={t("TakQuickstartWin2.unfoldableCardDownload.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCardDownload.description1"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
              description2={
                <Button
                  variant={{ width: "full" }}
                  onClick={handleDownloadButtonClick}
                  styling="m-1 px-3 bg-success text-white w-full"
                >
                  {t("serviceTak.grabZipButton")}
                </Button>
              }
              note={t("TakQuickstartIos1.unfoldableCard2.note")}
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard2.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans i18nKey="TakQuickstartWin2.unfoldableCard2.description1" />
              }
              image2Src={pic9}
              image2Classes="mx-auto pr-5 w-[290px] p-4"
              description2={
                <Trans i18nKey="TakQuickstartWin2.unfoldableCard2.description2" />
              }
            />
            <UnfoldableCard
              title={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.title"
                  components={{ strong: <strong />, em: <em /> }}
                />
              }
              styling="bg-backgroundLight"
              description1={
                <Trans i18nKey="TakQuickstartWin2.unfoldableCard3.description1" />
              }
              image2Src={pic10}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.description2"
                  components={{ strong: <strong /> }}
                />
              }
              image3Src={pic11}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.description3"
                  components={{ strong: <strong /> }}
                />
              }
              image4Src={pic12}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.description4"
                  components={{ strong: <strong />, ul: <ul />, li: <li /> }}
                />
              }
              image5Src={pic13}
              image5Classes="mx-auto pr-5 w-[300px] p-4"
              description5={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.description5"
                  components={{ strong: <strong /> }}
                />
              }
              image6Src={pic14}
              image6Classes="mx-auto pr-5 w-[300px] p-4"
              description6={
                <Trans
                  i18nKey="TakQuickstartWin2.unfoldableCard3.description6"
                  components={{ strong: <strong /> }}
                />
              }
              description7={
                <Trans i18nKey="TakQuickstartWin2.unfoldableCard3.description7" />
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win1"
          forwardUrl="/app/services/tak/quickstart/win3"
        />
      </Layout>
    </div>
  );
}
