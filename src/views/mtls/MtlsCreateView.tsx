import { Button } from "../../components/Button";
import { useGetCertificate } from "../../hook/api/useGetCertificate";
import { Layout } from "../../components/Layout";
import { DropdownMenu } from "../../components/DropdownMenu";
import { useEffect, useState } from "react";
import { useUserType } from "../../hook/auth/useUserType";
import { getOperatingSystem } from "../../hook/helpers/getOperatingSystem";
import { WindowsInstructions } from "./WindowsMtlsInstructions";
import { MacInstructions } from "./MacMtlsInstructions";
import { LinuxInstructions } from "./LinuxMtlsInstructions";
import { AndroidInstructions } from "./AndroidMtlsInstructions";
import { IosInstructions } from "./IosMtlsInstructions";
import { CardsContainer } from "../../components/CardsContainer";
import { Text } from "../../components/Text";
import { InfoModal } from "../../components/InfoModal";
import { useTranslation } from "react-i18next";
import key from "../../assets/icons/key.svg";

export function MtlsCreateView() {
  const { userType } = useUserType();
  const [selectedOS, setSelectedOS] = useState("");
  const protocol = window.location.protocol;
  const host = window.location.host;
  const { mutate: downloadCert } = useGetCertificate();
  const [callsign, setCallsign] = useState("");
  const [userOS, setUserOS] = useState("");
  const { t } = useTranslation();
  const osToShow = selectedOS || userOS;
  const osOptions = [
    { label: "Windows", value: "Windows" },
    { label: "MacOS", value: "MacOS" },
    { label: "Android", value: "Android" },
    { label: "iOS", value: "iOS" },
  ];
  const osToShowLabel =
    osOptions.find((option) => option.value === osToShow)?.label || userOS;
  const triggerLabelText = `${t("mtls-download-whichtoshow")} ${osToShowLabel}`;

  useEffect(() => {
    setUserOS(getOperatingSystem());
  }, []);

  const baseMtlsUrl = `${protocol}//mtls.${host}/`;

  let mtlsUrl = baseMtlsUrl;

  if (userType === "admin") {
    mtlsUrl += "app/admin";
  } else if (userType === "user" && callsign) {
    mtlsUrl += `app/users/${callsign}`;
  }

  useEffect(() => {
    const storedCallsign = localStorage.getItem("callsign");
    if (storedCallsign) {
      setCallsign(storedCallsign);
    } else {
      console.log("No callsign found in localStorage");
    }
  }, []);

  const renderInstructions = () => {
    switch (osToShow) {
      case "Windows":
        return <WindowsInstructions />;
      case "MacOS":
        return <MacInstructions />;
      case "Linux":
        return <LinuxInstructions />;
      case "Android":
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
          title={t("mtls-download-install-title")}
          description={t("mtls-download-install-description")}
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
        <DropdownMenu
          triggerLabel={triggerLabelText}
          items={osOptions}
          onSelect={(value) => setSelectedOS(value)}
          triggerStyle="px-4 py-2 mb-4 min-w-[90%] bg-primary-500 text-white rounded cursor-pointer" //
        />
        {renderInstructions()}
        <div className="flex flex-row pt-8 items-center gap-4">
          <Button
            variant={{ color: "success" }}
            className="flex rounded-lg items-center justify-center h-20 px-4 text-center font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-success hover:bg-success-700 focus:ring-success-300 disabled:bg-success-200 min-w-[180px]"
            onClick={() => callsign && downloadCert(callsign)}
          >
            {t("download-your-key")}
          </Button>
          <a
            href={mtlsUrl}
            className="flex rounded-lg items-center justify-center h-20 px-4 text-center font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200 min-w-[180px]"
          >
            {t("navigate-with-your-key")}
          </a>
        </div>
      </CardsContainer>
    </Layout>
  );
}
