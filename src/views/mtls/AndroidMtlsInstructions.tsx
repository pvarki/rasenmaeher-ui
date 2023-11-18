import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1 from "../../assets/mtls/mtls-android-1.jpg";
import pic2 from "../../assets/mtls/mtls-android-2.jpg";
import pic3 from "../../assets/mtls/mtls-android-3.jpg";
import pic4 from "../../assets/mtls/mtls-android-4.jpg";

export function AndroidInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title="1. Lataa ja avaa avain"
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <>
                Paina <strong>Lataa avain</strong>-painiketta. Avain latautuu,
                ja valintaikkuna kysyy salasanaa. Salasana on aina{" "}
                <strong>peitenimesi</strong>.
              </>
            ),
            imageSrc: pic1,
            imageClasses: "m-3 w-[200px]",
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
                Ikkuna kysyy varmenteen tyyppiä. Se on{" "}
                <strong>VPN- ja sovelluskäytön varmenne.</strong>
              </>
            ),
            imageSrc: pic2,
            imageClasses: "m-3 w-[200px]",
          },
          {
            description: (
              <>
                Ikkuna pyytää nimeämään varmenteen. Valmiiksi täytettynä on
                peitenimesi. Älä muuta nimeä, paina <strong>OK.</strong>
              </>
            ),
            imageSrc: pic3,
            imageClasses: "m-3 w-[200px]",
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
            imageSrc: pic4,
            imageClasses: "m-3 w-[200px]",
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
