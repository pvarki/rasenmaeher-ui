import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useOwnEnrollmentStatus } from "../../hook/api/useOwnEnrollmentStatus";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";

export function EnrollmentView() {
  const navigate = useNavigate();

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

  useEffect(() => {
    if (isEnrolled) {
      window.location.reload();
    }
  }, [isEnrolled]);

  if (isEnrolled) {
    return (
      <Layout
        showNavbar={false}
        navbarTitle="metsa-kota.pvarki.fi"
        showFooter={true}
      >
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <h1 className="text-white">metsa-kota</h1>
          <span className="text-white">
            Sinut on hyväksytty palveluun. Jatka asentamaan mTLS-
          </span>
          <Button onClick={() => navigate("/login/createmtls")}>Jatka</Button>
        </main>
      </Layout>
    );
  }

  return (
    <Layout
      showNavbar={false}
      navbarTitle="metsa-kota.pvarki.fi"
      showFooter={true}
    >
      <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
        <h1 className="text-white">metsa-kota</h1>
        <QRCode value={approvalUrl} />
        <button className="text-white">kopioi linkki</button>
        <span className="text-white">{callsign}</span>
        <span className="text-white">{approveCode}</span>
      </main>
    </Layout>
  );
}
