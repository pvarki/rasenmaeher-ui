import QRCode from "react-qr-code";
import { Layout } from "../../../components/Layout";
import { Button } from "../../../components/Button";
import { CardsContainer } from "../../../components/CardsContainer";
import { useParams } from "react-router-dom";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";
import { useCopyToClipboard } from "../../../hook/helpers/useCopyToClipboard";
import { useTranslation, Trans } from "react-i18next";

export function QrCodeView() {
  const { inviteCode } = useParams();
  const { isCopied, handleCopy } = useCopyToClipboard();
  const { t } = useTranslation();
  let hostname = new URL(window.location.origin).hostname;
  hostname = hostname.replace(/^mtls\./, "");
  const inviteUrl =
    window.location.protocol +
    "//" +
    hostname +
    (window.location.port ? ":" + window.location.port : "") +
    "/login?code=" +
    (inviteCode ?? "");

  return (
    <Layout
      showNavbar={true}
      navbarTitle={
        <Trans
          i18nKey="qRCodeView.navbarTitle"
          values={{ inviteCode }}
          components={{ em: <em /> }}
        />
      }
      backUrl="/app/admin/user-management/code-list"
    >
      <CardsContainer>
        <div className="flex flex-col items-center gap-5">
          <div className="flex flex-col justify-center w-full items-center p-3 pb-0 bg-backgroundLight rounded-lg">
            <div className="p-2 bg-white rounded-lg">
              <QRCode value={inviteUrl} bgColor="#FFFFFF" />
            </div>
            <div className="w-[60%] p-4 flex justify-center">
              <Button
                variant={{ color: "primary" }}
                onClick={() => handleCopy(inviteUrl)}
                className="w-full h-[4rem] font-bold text-white rounded-lg bg-primary hover:bg-primary-700 focus:ring-4 focus:ring-primary-500 focus:outline-none"
              >
                {isCopied
                  ? t("qRCodeView.linkCopied")
                  : t("qRCodeView.copyInviteLink")}
              </Button>
            </div>
          </div>
          <ServiceInfoCard
            details={
              <Trans
                i18nKey="qRCodeView.instructions"
                components={{
                  strong: <strong />,
                  i: <i />,
                  small: <small />,
                  br: <br />,
                }}
              />
            }
          />
        </div>
      </CardsContainer>
    </Layout>
  );
}
