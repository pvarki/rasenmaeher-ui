import { useMemo } from "react";
import { Layout } from "../components/Layout";
import { useQueryParams } from "../utils/useQueryParams";

const ERROR_CODES = {
  mtls_fail: {
    title: "Virheellinen mTLS-avain",
    details:
      "Selaimen mielestä mTLS-avaimesi on virheellinen (tai sitä ei ole). Jos juuri asensit avaimen laitteellesi, kokeile sulkea selain ja käynnistää se uudelleen.",
  },
  fall_back: {
    title: "Virhe",
    details: "Tapahtui virhe, jolle ei ole vielä virheilmoitusta.",
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
    <Layout showNavbar={false}>
      <div className="flex flex-col text-centered items-center justify-center h-screen gap-4 p-8">
        <h1 className="text-white">{errorDetails.title}</h1>
        <p className="text-white">{errorDetails.details}</p>

        <div className="py-5 text-s text-white">
          Tee ehtiessäsi virheilmoitus! Käytä oheisen linkin takaa löytyvää
          lomaketta, valitse Rasenmaeher ja Bugi ilmoituksen tyypiksi.
          Kehittäjät kiittävät!{" "}
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSehHTASMmqszEMOVOwMvjUNOj-lcEGskk58sUjsmurJDlvFZw/viewform"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <br />
            Virheiden ja ideoiden ilmoituslomake
          </a>
        </div>

        <a
          href="/"
          className="rounded-lg px-4 py-2 font-bold transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed text-white bg-primary hover:bg-primary-700 focus:ring-primary-300 disabled:bg-primary-200"
        >
          Palaa etusivulle
        </a>
      </div>
    </Layout>
  );
}
