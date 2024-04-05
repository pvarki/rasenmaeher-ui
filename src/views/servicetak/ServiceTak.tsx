import tak from "../../assets/icons/taklogo.png";
import usage from "../../assets/icons/sota.png";
import phone from "../../assets/icons/byod2.png";
import { Trans, useTranslation } from "react-i18next";
import { CardsContainer } from "../../components/CardsContainer";
import { FoldableCard } from "../../components/FoldableCard";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ServiceTakUsageCard } from "./usage/helpers/ServiceTakUsageCard";
import { useDownloadTakZipModal } from "../../components/tak/DownloadTakZipModal";
import LoadingComponent from "../../components/Loading/LoadingComponent";

export function ServiceTak() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { openDownloadModal, loading } = useDownloadTakZipModal();
  if (loading) {
    return <LoadingComponent text={t("takZipDownload.iAmDownloading")} />;
  }
  const handleDownloadButtonClick = () => {
    (openDownloadModal as () => void)();
  };

  return (
    <div>
      <CardsContainer>
        <FoldableCard title={t("serviceTak.foldableCardTitle")} imageSrc={tak}>
          <div className="flex flex-col items-center justify-center p-5">
            <ServiceInfoCard
              title={t("serviceTak.serviceInfoCardTitle")}
              image={tak}
            />
            <UnfoldableCard
              title={t("serviceTak.unfoldableCardTitle")}
              steps={[
                {
                  description: (
                    <Trans
                      i18nKey="serviceTak.step1Description"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="serviceTak.step2Description"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
                {
                  description: (
                    <Trans
                      i18nKey="serviceTak.step3Description"
                      components={{ strong: <strong /> }}
                    />
                  ),
                },
              ]}
            />

            <ServiceTakUsageCard />
            <div className="flex flex-col items-center justify-center px-0 w-full">
              <div className="flex w-full items-center justify-center items-stretch px-0">
                <div className="flex-1 px-0">
                  <div className="w-full">
                    <Button
                      variant={{ width: "full" }}
                      onClick={() => navigate("/app/services/tak/quickstart")}
                      styling="m-1 w-full min-h-[4rem]"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <img src={phone} alt="keys" className="h-5 w-5 mr-2" />
                        {t("serviceTak.guideButton.quickStart")}
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="p-1" />
                <div className="flex-1 px-0">
                  <div className="w-full">
                    <Button
                      variant={{ width: "full" }}
                      onClick={() => navigate("/app/services/tak/usage")}
                      styling="m-1 px-2 w-full min-h-[4rem]"
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <img src={usage} alt="keys" className="h-5 w-5 mr-2" />
                        {t("serviceTak.guideButton.usage")}
                      </div>
                    </Button>
                  </div>
                </div>
                <div className="p-1" />
              </div>

              <Button
                variant={{ width: "full" }}
                onClick={handleDownloadButtonClick}
                styling="m- px-3 bg-success text-white w-full"
              >
                {t("downloadClientPackage")}
              </Button>
            </div>
          </div>
        </FoldableCard>
      </CardsContainer>
    </div>
  );
}
