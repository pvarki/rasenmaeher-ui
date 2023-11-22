import { UnfoldableCard } from "../../components/UnfoldableCard";
import pic1 from "../../assets/mtls/mtls-ios-1.png";
import pic2 from "../../assets/mtls/mtls-ios-2.png";
import pic3 from "../../assets/mtls/mtls-ios-3.png";
import pic4 from "../../assets/mtls/mtls-ios-4.png";
import pic5 from "../../assets/mtls/mtls-ios-5.png";
import pic6 from "../../assets/mtls/mtls-ios-6.png";
import pic7 from "../../assets/mtls/mtls-ios-7.png";
import pic8 from "../../assets/mtls/mtls-ios-8.png";
import pic9 from "../../assets/mtls/mtls-ios-9.png";

export function IosInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title="1. Lataa avaimesi"
        styling="bg-backgroundLight"
        description1={
          <>
            Paina <strong>Lataa avain</strong>-painiketta. Laitteesi kysyy,
            sallitaanko asetusprofiilin lataaminen. Paina <strong>Salli</strong>
            .
          </>
        }
        image2Src={pic1}
        image2Classes="p-6"
        description2={<>Laitteesi ilmoittaa, että avain on ladattu.</>}
        image3Src={pic2}
        image3Classes="p-6"
      />
      <UnfoldableCard
        title="2. Avaa avaimesi"
        styling="bg-backgroundLight"
        description1={
          <>
            Vedä näyttöä keskeltä alaspäin, ja kirjoita avautuvaan hakukenttään{" "}
            <em>profiili.</em> Valitse <strong>VPN ja laitehallinta.</strong>.
          </>
        }
        image2Src={pic3}
        image2Classes="p-6"
        description2={
          <>
            VPN ja laitehallinta -valikossa valitse Ladattu profiili{" "}
            <strong>Henkilövarmenne</strong> - tämä on juuri lataamasi avain.
          </>
        }
        image3Src={pic4}
        image3Classes="p-6"
      />
      <UnfoldableCard
        title="3. Aseta avaimesi"
        styling="bg-backgroundLight"
        description1={
          <>Valittuasi avaimen, laite kysyy omaa pääsykoodiasi. Syötä se.</>
        }
        image2Src={pic5}
        image2Classes="p-6"
        description2={
          <>
            Laite antaa varoituksen. Paina <strong>Asenna</strong> oikeasta
            yläkulmasta.
          </>
        }
        image3Src={pic6}
        image3Classes="p-6"
        description3={
          <>
            Laite kysyy avaimen salasanaa. Salasana on aina antamasi{" "}
            <strong>peitenimi</strong>, esimerkiksi JANNE1.
          </>
        }
        image4Src={pic7}
        image4Classes="p-6"
        description4={
          <>
            Onnistuneen salasanan jälkeen laite ilmoittaa, että profiili eli
            avain on asennettu. Tämän jälkeen siirry takaisin
            Rasenmaeher-sovellukseen selaimellasi Paina siellä{" "}
            <strong>Siirry palveluun avaimellasi</strong> -nappia.
          </>
        }
        image5Src={pic8}
        image5Classes="p-6"
        description5={
          <>
            Selain toteaa, että sovellus vaatii asiakasvarmenteen (eli juuri
            asentamasi avaimen). Paina <strong>Jatka.</strong>
          </>
        }
        image6Src={pic9}
        image6Classes="p-6"
        description6={
          <>
            Avain on nyt asetettu! Tämän jälkeen aina, kun saavut
            Rasenmaeheriin, palvelu tunnistaa sinut omalla avaimellasi. <br />
            <br />
            Mikäli päädyt login-sivulle, paina "Minulla on avain"-näppäintä.
          </>
        }
      />
    </main>
  );
}
