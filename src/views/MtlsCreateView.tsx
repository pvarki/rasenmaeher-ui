import { Button } from "../components/Button";
import { useGetCertificate } from "../hook/api/useGetCertificate";

export function MtlsCreateView() {
  const { mutate: downloadCert } = useGetCertificate();

  const { href, hostname } = window.location;

  const mtlsUrl = hostname.includes("mtls")
    ? href
    : href.replace(hostname, "mtls." + hostname);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Button onClick={() => downloadCert("admin")}>Lataa sertti</Button>
      <a
        href={mtlsUrl}
        className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
      >
        Testaa sertti
      </a>
    </div>
  );
}
