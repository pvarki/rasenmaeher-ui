import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import wait from "../../../../assets/takguides/atak/wait.png";
import ATAK from "../../../../assets/icons/tak-logo.png";
import googleplay from "../../../../assets/icons/googleplay.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { Button } from "../../../../components/Button";
import { useDownloadTakZipModal } from "../../../../components/tak/DownloadTakZipModal";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { Trans, useTranslation } from "react-i18next";
import LoadingComponent from "../../../../components/Loading/LoadingComponent";

export function TakQuickstartAndroid1() {
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
        navbarTitle={t("takQuickstartAndroid1.navbarTitle")}
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title={t("takQuickstartAndroid1.statusBarTitle")}
          progressMax={5}
          progressNow={1}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title={t("takQuickstartAndroid1.serviceInfoCardTitle")}
              image={ATAK}
              details={
                <Trans
                  i18nKey="takQuickstartAndroid1.serviceInfoCard.details"
                  components={{
                    strong: <strong />,
                    br: <br />,
                  }}
                />
              }
            />
            <UnfoldableCard
              title={t("takQuickstartAndroid1.unfoldableCard1.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="takQuickstartAndroid1.unfoldableCard1.description1"
                  components={{
                    strong: <strong />,
                    h3: <h3 />,
                  }}
                />
              }
              image2Src={googleplay}
              image2Link="https://play.google.com/store/apps/details?id=com.atakmap.app.civ"
              image2Classes="w-[200px]"
              description2={
                <Trans
                  i18nKey="takQuickstartAndroid1.unfoldableCard1.description2"
                  components={{
                    strong: <strong />,
                    h3: <h3 />,
                  }}
                />
              }
              image3Src={googleplay}
              image3Classes="w-[200px]"
              image3Link="https://play.google.com/store/apps/details?id=com.atakmap.android.datasync.plugin"
            />
            <UnfoldableCard
              title={t("takQuickstartAndroid1.unfoldableCard2.title")}
              styling="bg-backgroundLight"
              description1={
                <Trans
                  i18nKey="takQuickstartAndroid1.unfoldableCard2.description1"
                  components={{
                    strong: <strong />,
                    br: <br />,
                  }}
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
              note={t("takQuickstartAndroid1.unfoldableCard2.note")}
            />
            <UnfoldableCard
              title={t("takQuickstartAndroid1.unfoldableCard3.title")}
              styling="bg-backgroundLight"
              description1={t(
                "takQuickstartAndroid1.unfoldableCard3.description1",
              )}
              imageSrc={wait}
              imageClasses="m-3 w-[200px]"
              description2={
                <Trans
                  i18nKey="takQuickstartAndroid1.unfoldableCard3.description2"
                  components={{
                    em: <em />,
                  }}
                />
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart"
          forwardUrl="/app/services/tak/quickstart/android2"
        />
      </Layout>
    </div>
  );
}
