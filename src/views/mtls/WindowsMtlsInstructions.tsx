import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1 from "../../assets/mtls/mtls-windows-1.png";
import pic2 from "../../assets/mtls/mtls-windows-2.png";
import pic3 from "../../assets/mtls/mtls-windows-3.png";
import pic4 from "../../assets/mtls/mtls-windows-4.png";
import pic5 from "../../assets/mtls/mtls-windows-5.png";
import pic6 from "../../assets/mtls/mtls-windows-6.png";
import pic7 from "../../assets/mtls/mtls-windows-7.png";
import pic8 from "../../assets/mtls/mtls-windows-8.png";

export function WindowsInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title="1. Lataa avain"
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <>
                Paina <strong>Lataa avain</strong>-painiketta. Avain latautuu.
                Avaa avain selaimen Downloads-valikosta tai latauksesta
                ilmoittavasta popupista.
              </>
            ),
            imageSrc: pic1,
            imageClasses: "m-3 w-[300px]",
          },
        ]}
      />
      <UnfoldableCard
        title="2. Aseta avain"
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <>
                a. Kaksoisnapauta avainta <em>'Peitenimesi.pfx'</em>. Avaimen
                asennusohjelma käynnistyy. Valitse <em>Store Location</em>{" "}
                <strong>Local User</strong> (paikallinen käyttäjä.)
              </>
            ),
            imageSrc: pic2,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                b. Asennusohjelma kysyy tiedostoa. Se on valmiiksi täytettynä,
                joten paina <strong>Next</strong> (Seuraava).
              </>
            ),
            imageSrc: pic3,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                c. Seuraavaksi kysytään salasanaa. Se on aina{" "}
                <strong>peitenimesi</strong>, esimerkiksi KARHU10.
                <br />
                <br />
                <em>Import options</em>- kyselyyn täytä ainoastaan{" "}
                <strong>Include all extended properties</strong> ja paina{" "}
                <strong>Next.</strong>
              </>
            ),
            imageSrc: pic4,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                d. Certificate Store-valikossa anna oletuksen olla, eli valitse{" "}
                <strong>Automaattinen</strong>.
              </>
            ),
            imageSrc: pic5,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                e. Avaimen asennus on valmis! Paina <strong>Finish.</strong>
              </>
            ),
            imageSrc: pic6,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                Asennusohjelma antaa vielä ilmoituksen onnistuneesta
                asennuksesta.
              </>
            ),
            imageSrc: pic7,
            imageClasses: "m-3 w-[500px]",
          },
        ]}
      />
      <UnfoldableCard
        title="3. Siirry palveluun avaimellasi"
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <>
                Olet nyt valmis! Kun painat <em>Siirry palveluun</em>
                -painiketta, selain kysyy, mitä varmennetta haluat käyttää.
                Paina <strong>OK.</strong>
              </>
            ),
            imageSrc: pic8,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <>
                Tämän jälkeen pääset aina palveluun avaimellasi. Et tarvitse
                salasanoja, koska palvelu tunnistaa sinut avaimellasi.
              </>
            ),
          },
        ]}
      />
    </main>
  );
}
