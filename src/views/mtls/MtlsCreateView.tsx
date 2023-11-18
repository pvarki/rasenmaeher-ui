import { Button } from "../../components/Button";
import { useGetCertificate } from "../../hook/api/useGetCertificate";
import { Layout } from "../../components/Layout";
import { useEffect, useState } from "react";
import { getOperatingSystem } from "../../hook/helpers/getOperatingSystem";
import { WindowsInstructions } from "./WindowsMtlsInstructions";
import { MacInstructions } from "./MacMtlsInstructions";
import { LinuxInstructions } from "./LinuxMtlsInstructions";
import { AndroidInstructions } from "./AndroidMtlsInstructions";
import { IosInstructions } from "./IosMtlsInstructions";
import { CardsContainer } from "../../components/CardsContainer";
import { Text } from "../../components/Text";
import { InfoModal } from "../../components/InfoModal";
import key from "../../assets/icons/key.svg";

export function MtlsCreateView() {
  const { mutate: downloadCert } = useGetCertificate();
  const [callsign, setCallsign] = useState("");
  const [userOS, setUserOS] = useState("");

  useEffect(() => {
    setUserOS(getOperatingSystem());
  }, []);

  const { href, hostname } = window.location;
  const mtlsUrl = hostname.includes("mtls")
    ? href
    : href.replace(hostname, "mtls." + hostname);

  useEffect(() => {
    const storedCallsign = localStorage.getItem("callsign");
    if (storedCallsign) {
      setCallsign(storedCallsign);
    } else {
      console.log("No callsign found in localStorage");
    }
  }, []);

  const renderInstructions = () => {
    switch (userOS) {
      case "Windows":
        return <WindowsInstructions />;
      case "Android":
        return <MacInstructions />;
      case "Linux":
        return <LinuxInstructions />;
      case "MacOS":
        return <AndroidInstructions />;
      case "iOS":
        return <IosInstructions />;
      default:
        return <AndroidInstructions />; // default to Android
    }
  };

  return (
    <Layout showNavbar={true} showFooter={true}>
      <CardsContainer>
        <Text
          title="Lataa ja asenna mTLS-avain"
          description="Voit käyttää palvelua vain, jos laitteellasi on siihen mTLS-avain. Lataa ja asenna avain laitteellesi."
        />

        <div className="flex flex-col items-center">
          <div className="flex items-center justify-center w-full">
            <div className="mr-4">
              <InfoModal triggerClassName="text-m text-blue-500 underline cursor-pointer pt-2" />
            </div>
            <img src={key} alt="Key" className="text-white w-24 h-24 mb-6" />
            <div className="mr-4 invisible">
              <InfoModal triggerClassName="text-m text-blue-500 underline cursor-pointer" />
            </div>
          </div>
        </div>

        {renderInstructions()}
        <div className="flex flex-row pt-8 items-center gap-4">
          <Button
            variant={{ color: "success" }}
            className="flex rounded-lg items-center justify-center h-20 px-4 text-center font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-success hover:bg-success-700 focus:ring-success-300 disabled:bg-success-200 min-w-[180px]" // Ensure you add min-w-[180px] or another specific width to control width and use h-20 for height
            onClick={() => callsign && downloadCert(callsign)}
          >
            Lataa avaimesi
          </Button>
          <a
            href={mtlsUrl}
            className="flex rounded-lg items-center justify-center h-20 px-4 text-center font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200 min-w-[180px]" // Use the same classes here
          >
            Siirry palveluun avaimellasi
          </a>
        </div>
      </CardsContainer>
    </Layout>
  );
}
