import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import appstore from "../../../../assets/icons/appstore.svg";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Button } from "../../../../components/Button";
import { useDownloadTakZipModal } from "../../../../components/tak/DownloadTakZipModal";
import { Trans, useTranslation } from "react-i18next";
import LoadingComponent from "../../../../components/Loading/LoadingComponent";

export function TakQuickstartIos1() {
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
        navbarTitle={t("TakQuickstartIos1.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("TakQuickstartIos1.statusBarTitle")}
          progressMax={5}
          progressNow={1}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <Trans
                  i18nKey="TakQuickstartIos1.serviceInfoCard.details"
                  components={{ strong: <strong />, br: <br /> }}
                />
              }
            />
            <UnfoldableCard
              title={t("TakQuickstartIos1.unfoldableCard1.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos1.unfoldableCard1.description1"
                  components={{ strong: <strong />, h3: <h3 /> }}
                />
              }
              image2Src={appstore}
              image2Link="https://apps.apple.com/us/app/itak/id1561656396"
              image2Classes="w-[200px]"
            />
            <UnfoldableCard
              title={t("TakQuickstartIos1.unfoldableCard2.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="TakQuickstartIos1.unfoldableCard2.description1"
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
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/ios2"
        />
      </Layout>
    </div>
  );
}
