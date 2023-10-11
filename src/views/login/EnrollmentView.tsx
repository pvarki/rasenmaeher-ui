import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useOwnEnrollmentStatus } from "../../hook/api/useOwnEnrollmentStatus";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";

export function EnrollmentView() {
  const navigate = useNavigate();

  const callsign = localStorage.getItem("callsign") ?? undefined;
  const approveCode = localStorage.getItem("approveCode") ?? undefined;

  useEffect(() => {
    if (!approveCode || !callsign) {
      navigate("/login");
    }
  }, [approveCode]);

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
      <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
        <h1 className="text-white">metsa-kota</h1>
        <span className="text-white">Olet rekisteröitynyt</span>
        <Button onClick={() => navigate("/app")}>Jatka</Button>
      </main>
    );
  }

  return (
    <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
      <h1 className="text-white">metsa-kota</h1>
      <QRCode value="hey" />
      <button className="text-white">kopioi linkki</button>
      <span className="text-white">{callsign}</span>
      <span className="text-white">{approveCode}</span>
    </main>
  );
}
