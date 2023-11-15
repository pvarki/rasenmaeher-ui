import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic1 from "../../../../assets/takguides/itak/itakquickstart1.png";
import pic2 from "../../../../assets/takguides/itak/itakquickstart2.png";
import pic3 from "../../../../assets/takguides/itak/itakquickstart3.png";
import pic4 from "../../../../assets/takguides/itak/itakquickstart4.png";
import pic5 from "../../../../assets/takguides/itak/itakquickstart5.png";
import pic7 from "../../../../assets/takguides/itak/itakquickstart7.png";

export function TakQuickstartIos2() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Tee perusasetukset (2/4)"
          progressMax={4}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 2:{" "}
                  <strong>Tee perusasetukset</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa tulee avata iTAK-sovellus.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Käynnistä sovellus</strong>
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Avaa <strong>iTAK</strong>-sovellus.
                  <br />
                  <br />
                  Kun sovellus kysyy:{" "}
                  <em>"iTAK haluaa etsiä lähiverkossa..."</em>, valitse{" "}
                  <strong>Älä salli</strong>.
                </>
              }
              image2Src={pic1}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
            />
            <UnfoldableCard
              title={
                <>
                  2. <strong>Anna</strong> oma Callsign
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Täytä <strong>Profile Settings</strong>:
                </>
              }
              image2Src={pic2}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  Anna <strong>Callsign-kenttään</strong> oma peitteesi,
                  esimerkiksi <em>Rambo</em>.
                  <br />
                  <br />
                  Phone-kenttää <strong>ei täytetä.</strong>
                  <br />
                  Paina lopuksi <em>Next.</em>
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  3. <strong>Aseta</strong> Team Settings
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Täytä <strong>Team Settings:</strong>
                </>
              }
              image2Src={pic3}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  Valitse <strong>Select Team</strong>-kenttään rullavalikosta
                  joukkosi (käsketty) väri.
                  <br />
                  <br />
                  Valitse <strong>Select Team Role</strong>-kenttään
                  rullavalikosta rooli <strong>Team Member</strong>, ellei muuta
                  ole käsketty.
                  <br />
                  <br />
                  <small>
                    <em>Komentopaikkakäyttäjät asettavat roolin HQ.</em>
                  </small>
                  <br />
                  <br />
                  Paina lopuksi <strong>Next.</strong>
                </>
              }
            />
            <UnfoldableCard
              title={<>4. Anna sovellukselle tarvittavat oikeudet</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Aseta <strong>Privacy Settings</strong> sallimaan
                  ilmoitukset (notifications) ja sijainnin (location services).
                </>
              }
              image2Src={pic4}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  <br />
                  b. iOS kysyy tämän jälkeen, sallitko iTAKin lähettävän sinulle{" "}
                  <strong>ilmoituksia</strong> ja{" "}
                  <strong>käyttää sijaintiasi</strong>.
                  <br />
                  <br />
                  Valitse ilmoituksiin <strong>Salli</strong>:
                </>
              }
              image3Src={pic5}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <>
                  <br />
                  <br />
                  c. Valitse sijaintiin <strong>Salli käytettäessä</strong>:
                </>
              }
              image4Src={pic7}
              image4Classes="mx-auto pr-5 w-[240px] p-4"
              description4={
                <>Tämän jälkeen siirrytään muodostamaan palvelinyhteys.</>
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios1"
          forwardUrl="/app/services/tak/quickstart/ios3"
        />
      </Layout>
    </div>
  );
}
