import { useMemo } from "react";
import { Layout } from "../components/Layout";
import { useQueryParams } from "../utils/useQueryParams";

const ERROR_CODES = {
  mtls_fail: {
    title: "Virheellinen sertifikaatti",
    details: "Sertifikaattisi on virheellinen. Ota yhteyttä ylläpitoon.",
  },
  fall_back: {
    title: "Virhe",
    details: "Tapahtui virhe. Ota yhteyttä ylläpitoon.",
  },
};

export function ErrorView() {
  const params = useQueryParams();

  const errorDetails = useMemo(() => {
    const code = params.get("code");
    if (!code || !(code in ERROR_CODES)) return ERROR_CODES["fall_back"];

    return ERROR_CODES[code as keyof typeof ERROR_CODES];
  }, [params]);

  return (
    <Layout showNavbar={false} navbarTitle="metsa-kota.pvarki.fi">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-white">{errorDetails.title}</h1>
        <p className="text-white">{errorDetails.details}</p>
        <a
          href="/app"
          className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
        >
          Palaa applikaatioon
        </a>
      </div>
    </Layout>
  );
}
