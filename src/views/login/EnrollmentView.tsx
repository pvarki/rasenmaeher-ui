import { useEffect, useState, useMemo } from "react";
import QRCode from "react-qr-code";
import { useOwnEnrollmentStatus } from "../../hook/api/useOwnEnrollmentStatus";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useCopyToClipboard } from "../../hook/helpers/useCopyToClipboard";
import useFetchFqdn from "../../hook/helpers/useFetchFqdn";

export function EnrollmentView() {
  const navigate = useNavigate();
  const fqdn = useFetchFqdn();
  const subdomain = useMemo(() => fqdn.split(".")[0], [fqdn]);
  const { isCopied, copyError, handleCopy } = useCopyToClipboard();
  const callsign = localStorage.getItem("callsign") ?? undefined;
  const approveCode = localStorage.getItem("approveCode") ?? undefined;
  const approvalUrl =
    "mtls." +
    window.location.origin +
    "/login?callsign=" +
    (callsign ?? "") +
    "&&code=" +
    (approveCode ?? "");

  useEffect(() => {
    if (!approveCode || !callsign) {
      navigate("/login");
    }
  }, [approveCode, callsign, navigate]);

  const [isEnrolled, setIsEnrolled] = useState(false);
  useOwnEnrollmentStatus({
    onSuccess: (isEnrolled) => {
      if (isEnrolled) {
        setIsEnrolled(true);
      }
    },
    refetchInterval: 1000,
    enabled: !isEnrolled,
  });

  if (isEnrolled) {
    return (
      <Layout showNavbar={false} showFooter={true}>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white">{subdomain || "Loading..."}</h1>
          <span className="text-white">Sinut on hyväksytty palveluun.</span>
          <Button
            onClick={() => {
              navigate("/login/createmtls");
              window.location.reload();
            }}
          >
            Jatka
          </Button>
        </main>
      </Layout>
    );
  }

  return (
    <Layout showNavbar={false} showFooter={true}>
      <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
        <h1 className="text-white">{subdomain || "Loading..."}</h1>
        <QRCode value={approvalUrl} />
        <button onClick={() => handleCopy(approvalUrl)} className="text-white">
          {isCopied ? "Linkki kopioitu!" : "Kopioi linkki"}
        </button>
        {copyError && (
          <span className="text-red-500">
            Toiminto epäonnistui: {copyError.message}
          </span>
        )}
        <span className="text-white">{callsign}</span>
        <span className="text-white">{approveCode}</span>
      </main>
    </Layout>
  );
}
