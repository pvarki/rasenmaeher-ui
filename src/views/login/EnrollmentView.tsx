import { useEffect, useState, useMemo } from "react";
import QRCode from "react-qr-code";
import { useOwnEnrollmentStatus } from "../../hook/api/useOwnEnrollmentStatus";
import { useNavigate } from "react-router-dom";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { Button } from "../../components/Button";
import { Layout } from "../../components/Layout";
import { useCopyToClipboard } from "../../hook/helpers/useCopyToClipboard";
import useHealthcheck from "../../hook/helpers/useHealthcheck";
import { CardsContainer } from "../../components/CardsContainer";
import { Text } from "../../components/Text";

export function EnrollmentView() {
  const navigate = useNavigate();
  const { fqdn } = useHealthcheck();
  const subdomain = useMemo(() => fqdn.split(".")[0], [fqdn]);
  const { isCopied, copyError, handleCopy } = useCopyToClipboard();
  const callsign = localStorage.getItem("callsign") ?? undefined;
  const approveCode = localStorage.getItem("approveCode") ?? undefined;
  const protocol = window.location.protocol;
  const host = window.location.host;
  const approvalUrl = `${protocol}//mtls.${host}/app/admin/user-management/approval?callsign=${
    callsign ?? ""
  }&&approvalcode=${approveCode ?? ""}`;

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
      <Layout showNavbar={true} showFooter={true}>
        <main className="px-10 flex flex-col gap-3 items-center justify-start h-full">
          <Text title={subdomain || "Loading..."} />
          <span className="text-white">Sinut on hyväksytty palveluun.</span>
          <Button
            onClick={() => {
              navigate("/login/createmtls");
              window.location.reload();
            }}
          >
            Jatka painamalla tästä.
          </Button>
        </main>
      </Layout>
    );
  }

  return (
    <Layout showNavbar={true} showFooter={false}>
      <CardsContainer>
        <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
          <div className="pb-4">
            <Text
              title="Olet odotustilassa!"
              description="Ylläpitäjän pitää hyväksyä sinut palveluun. Näytä hänelle oheista QR-koodia. Tai paina 'Kopioi linkki' ja lähetä hänelle hyväksyntälinkkisi esimerkiksi pikaviestillä."
            />
          </div>
          <QRCode value={approvalUrl} />
          <div className="w-full flex justify-end">
            <Button
              variant={{ color: "tertiary" }}
              onClick={() => handleCopy(approvalUrl)}
            >
              {isCopied ? "Linkki kopioitu!" : "Kopioi linkki ylläpitäjälle"}
            </Button>
          </div>
          {copyError && (
            <span className="text-red-500">
              Toiminto epäonnistui: {copyError.message}
            </span>
          )}
          <Text
            title={callsign}
            description="Hyväksyntäkoodisi:"
            description2={approveCode}
            styling2="font-consolas"
          />

          <UnfoldableCard
            title="Odotat hyväksyntää palveluun (ohje)."
            styling="bg-backgroundLight"
            steps={[
              {
                description: (
                  <>
                    Odotat ylläpitäjän hyväksyntää palveluun. Hyväksyntä
                    tapahtuu jollakin näistä kolmesta tavasta:
                    <br />
                    <br />
                    <li>
                      Admin skannaa oheisen <strong>QR-koodin</strong>, joka
                      sisältää hyväksymislinkin.
                    </li>
                    <li>
                      Kopioi ja lähetä ylläpitäjälle{" "}
                      <strong>hyväksymislinkki.</strong>
                    </li>
                    <li>
                      Lähetä ylläpitäjälle <strong>hyväksymiskoodisi</strong>,
                      jonka hän syöttää hyväksyntänäkymäänsä.
                    </li>
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
