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
import { useFetchZipFile } from "../../hook//api/tak/useFetchZipFile";
import { useAlertDialog } from "../../components/AlertDialogService";

export function ServiceTak() {
  const navigate = useNavigate();
  const { openDialog } = useAlertDialog();
  const { t } = useTranslation();
  const { mutate: fetchFile, isLoading } = useFetchZipFile({
    onSuccess: ({ blob, filename }) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      openDialog({
        title: t("serviceTak.grabZip.grabbedModalTitle"),
        description: (
          <div>
            <>
              {
                <Trans
                  i18nKey="serviceTak.grabZip.grabbedModalDescription"
                  components={{
                    em: <em />,
                    br: <br />,
                  }}
                />
              }{" "}
              "{filename}"
            </>
          </div>
        ),
        confirmLabel: t("close"),
        confirmColor: "primary",
        onConfirm: () => {
          // just close the dialog
        },
      });
    },
    onError: (error) => {
      const errorMessage =
        error.message || t("serviceTak.grabZip.grabbingGenericError");
      openDialog({
        title: t("serviceTak.grabZip.grabbingErrorTitle"),
        description: (
          <div>
            {
              <>
                <Trans
                  i18nKey="serviceTak.grabZip.grabbingErrorDescription"
                  components={{ strong: <strong />, em: <em />, br: <br /> }}
                />{" "}
                "{errorMessage}"
              </>
            }
          </div>
        ),
        confirmLabel: t("close"),
        confirmColor: "primary",
        onConfirm: () => {
          // just close the dialog
        },
      });
    },
  });

  const handleDownloadClick = () => {
    fetchFile();
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
            <div className="flex w-full items-center justify-center items-stretch px-0">
              <div className="flex-1 px-1">
                <Button
                  variant={{ width: "full" }}
                  onClick={() => navigate("/app/services/tak/quickstart")}
                  styling="m-1 px-2"
                  className="w-full h-full"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={phone} alt="keys" className="h-5 w-5 mr-2" />
                    {t("serviceTak.guideButton.quickStart")}
                  </div>
                </Button>
              </div>
              <div className="p-1" />
              <div className="flex-1 px-1">
                <Button
                  variant={{ width: "full" }}
                  onClick={() => navigate("/app/services/tak/usage")}
                  styling="m-1 px-2"
                  className="w-full h-full"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={usage} alt="keys" className="h-5 w-5 mr-2" />
                    {t("serviceTak.guideButton.usage")}
                  </div>
                </Button>
              </div>
              <div className="p-1" />
            </div>
            <Button
              variant={{ width: "full" }}
              onClick={handleDownloadClick}
              disabled={isLoading}
              styling="bg-success-700 m-2"
            >
              {isLoading
                ? "serviceTak.grabZipButton.loading"
                : t("serviceTak.grabZipButton")}
            </Button>
          </div>
        </FoldableCard>
      </CardsContainer>
    </div>
  );
}
