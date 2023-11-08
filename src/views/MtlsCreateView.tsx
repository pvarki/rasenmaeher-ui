import { Button } from "../components/Button";
import { useGetCertificate } from "../hook/api/useGetCertificate";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";

export function MtlsCreateView() {
  const { mutate: downloadCert } = useGetCertificate();
  const [callsign, setCallsign] = useState("");

  const { href, hostname } = window.location;
  const mtlsUrl = hostname.includes("mtls")
    ? href
    : href.replace(hostname, "mtls." + hostname);

  useEffect(() => {
    // Get the callsign from localStorage when the component mounts
    const storedCallsign = localStorage.getItem("callsign");
    if (storedCallsign) {
      setCallsign(storedCallsign);
    } else {
      console.log("No callsign found in localStorage");
      // Handle the case where the callsign isn't found, possibly redirect to login or show a message
    }
  }, []);

  // You can also add logic to redirect the user to a login page or display an error if the callsign is not available

  return (
    <Layout
      showNavbar={true}
      navbarTitle="metsa-kota.pvarki.fi"
      showFooter={true}
    >
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        {/* Use the callsign from the state when clicking the button */}
        <Button onClick={() => callsign && downloadCert(callsign)}>
          Lataa sertti
        </Button>
        <a
          href={mtlsUrl}
          className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
        >
          Testaa sertti
        </a>
      </div>
    </Layout>
  );
}
