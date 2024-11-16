import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useOwnEnrollmentStatus } from "../../hook/api/useOwnEnrollmentStatus";
import { useNavigate } from "react-router-dom";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useCopyToClipboard } from "../../hook/helpers/useCopyToClipboard";
import { CardsContainer } from "../../components/CardsContainer";
import { Text } from "../../components/Text";
import { useTranslation, Trans } from "react-i18next";

export function EnrollmentView() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { isCopied, copyError, handleCopy } = useCopyToClipboard();
  const callsign = localStorage.getItem("callsign") ?? undefined;
  const approveCode = localStorage.getItem("approveCode") ?? undefined;
  const protocol = window.location.protocol;
  const host = window.location.host;
  const approvalUrl = `${protocol}//mtls.${host}/app/admin/user-management/approval?callsign=${
    callsign ?? ""
  }&&approvalcode=${approveCode ?? ""}`;

  // Redirect to login if approveCode or callsign is missing
  useEffect(() => {
    if (!approveCode || !callsign) {
      navigate("/login");
    }
  }, [approveCode, callsign, navigate]);

  const [isEnrolled, setIsEnrolled] = useState(false);

  // Check enrollment status periodically
  useOwnEnrollmentStatus({
    onSuccess: (enrolled) => {
      if (enrolled) {
        setIsEnrolled(true);
      }
    },
    refetchInterval: 1000,
    enabled: !isEnrolled,
  });

  // Redirect to createmtls when enrollment is approved
  useEffect(() => {
    if (isEnrolled) {
      navigate("/login/createmtls");
    }
  }, [isEnrolled, navigate]);

  // Render the waiting for approval view
  return (
    <Layout showNavbar={true} showFooter={false}>
      <CardsContainer>
        <div className="flex flex-col items-center w-full justify-center">
          <div className="w-full">
            <Text
              title={t("awaiting-approval")}
              description={t("waiting-approval-instruction")}
            />
          </div>
          <div className="flex flex-col w-[80%] pb-3 justify-center">
            <Button
              variant={{ color: "primary" }}
              onClick={() => handleCopy(approvalUrl)}
              className="w-full h-[4rem] text-white rounded-lg font-bold bg-primary hover:bg-primary-700 focus:ring-4 focus:ring-primary-500 focus:outline-none"
            >
              {isCopied ? t("admin-link-copied") : t("copy-link")}
            </Button>
          </div>
          {copyError && (
            <span className="text-red-500">
              {t("action-failed")}: {copyError.message}
            </span>
          )}
          <div className="flex w-[90%] text-white justify-center pb-3 ">
            {t("waiting-approval-instruction3")}
          </div>
          <div className="p-2 bg-white rounded-lg">
            <QRCode value={approvalUrl} bgColor="#FFFFFF" />
          </div>
          <Text
            title={callsign}
            description={t("approval-code")}
            description2={approveCode}
            styling2="font-consolas"
          />
          <UnfoldableCard
            title={<Trans i18nKey="approval-waiting-title" />}
            styling="bg-backgroundLight"
            steps={[
              {
                description: (
                  <>
                    <Trans i18nKey="approval-instruction-intro" />
                    <br />
                    <ul>
                      <li>
                        <Trans
                          i18nKey="approval-instruction-qr"
                          components={{ 1: <strong /> }}
                        />
                      </li>
                      <li>
                        <Trans
                          i18nKey="approval-instruction-copy"
                          components={{ 1: <strong /> }}
                        />
                      </li>
                      <li>
                        <Trans
                          i18nKey="approval-instruction-send"
                          components={{ 1: <strong /> }}
                        />
                      </li>
                    </ul>
                  </>
                ),
              },
            ]}
          />
        </div>
      </CardsContainer>
    </Layout>
  );
}
