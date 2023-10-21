import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

import pic15 from "../../../../assets/takguides/wintak/Kuva45.png";
import pic17 from "../../../../assets/takguides/wintak/Kuva47.png";
import pic18 from "../../../../assets/takguides/wintak/Kuva48.png";
import pic19 from "../../../../assets/takguides/wintak/Kuva49.png";
import pic20 from "../../../../assets/takguides/wintak/Kuva50.png";
import pic23 from "../../../../assets/takguides/wintak/Kuva53.png";
import pic24 from "../../../../assets/takguides/wintak/Kuva54.png";
import pic25 from "../../../../assets/takguides/wintak/Kuva55.png";
import pic26 from "../../../../assets/takguides/wintak/Kuva56.png";
import pic27 from "../../../../assets/takguides/wintak/Kuva57.png";
import pic28 from "../../../../assets/takguides/wintak/Kuva58.png";

export function TakUsageWin3() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/Usage"
      >
        <CardsContainer>
          <UnfoldableCard
            title="Sisältö"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Tulkitse havaintoja, ylläpidä Feediä"
          progressMax={5}
          progressNow={3}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              description={
                <>WinTAK tekee ilmoituksia kuvan mukaisilla notifikaatioilla.</>
              }
              imageSrc={pic15}
              imageClasses="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Painamalla keltaisen lipun symbolia, avautuu{" "}
                  <strong>Notifications</strong>-näkymä.
                </>
              }
              image2Src={pic17}
              image2Classes="mx-auto pr-5 w-[400px] p-4"
              description3={
                <>
                  Komentopaikalla käsiteltäviä havaintoja ovat{" "}
                  <strong>Map Markers</strong>-havainnot ja{" "}
                  <strong>Quick Picit.</strong>
                  <br />
                  <br />
                  Ainoastaan ATAK-käyttäjät kykenevät lähettämään Quick Picejä.
                  <br />
                  <br></br>Havainnon nimi on automaattinen:{" "}
                  <strong>
                    "havainnon lähettäjän peite.havainnon pvm (pp).havainnon
                    ajankohta(hhmmss)
                  </strong>
                  :
                  <br />
                  <br />
                  <strong>Esimerkki:</strong> <em>iTAK002.01.123045</em>: <br />
                  <li>
                    kuun 1. päivänä klo 12:30:45 luotu havainto käyttäjältä
                    iTAK002.
                  </li>
                </>
              }
            />
            <GuideSection
              number="2."
              description={
                <>
                  Havainnot <strong>avataan ja käsitellään</strong> näin:
                  <br></br>
                  <ul>
                    <li>
                      1. Paina ilmoitusnäkymästä ilmoitusta, jonka haluat
                      käsitellä.
                    </li>
                    <li>2. Karttanäkymä keskittyy havaintoon.</li>
                    <li>3. Klikkaa kartalla olevaa havaintoa.</li>
                    <li>
                      4. Aukeaa <strong>ympyrävalikko</strong> (alla kuvassa).
                    </li>
                  </ul>
                </>
              }
              imageSrc={pic18}
              imageClasses="mx-auto pr-5 w-[500px] p-4"
              description2={
                <>
                  Valitse ympyrävalikosta roskakorin oikealla puolella oleva
                  Marker Details-kuvake. Aukeaa <strong>Marker Details</strong>
                  -näkymä (alla kuvassa)
                </>
              }
              image2Src={pic19}
              image2Classes="mx-auto pr-8 w-[350px] p-4"
              description3={
                <>
                  <strong>Käsittele havainto seuraavasti:</strong>
                  <li>Lue kommentit</li>
                  <li>Katso mahdollinen liite</li>
                  <li>Vertaa tietoihisi komentopaikalla</li>
                  <li>Varmista havainto joukolta.</li>
                  <li>
                    Jos et voi tehdä varmaa johtopäätöstä, jätä havainnoksi
                    (tuntematon=keltainen)
                  </li>
                  <li>
                    Kirjaa tulkintasi ja muutokset{" "}
                    <strong>Remarkseihin.</strong>
                    <br />
                    <br />
                    Perusmallin mukaisesti joukon tulisi ilmoittaa havainnosta
                    myös sanomalla (välitettynä soveltuvalla tavalla).
                  </li>
                </>
              }
              note3={
                <>
                  <br />
                  Kun kirjaat tulkintoja, muista erottaa johtopäätös
                  alkuperäisestä kuvauksesta. Tee tämä merkinnällä{" "}
                  <em>HQ JP: (arvio tai johtopäätös)</em>
                  <br />
                  <br />
                  Muista myös TL JULK - käytä peitteistöä.
                </>
              }
            />
            <GuideSection
              number="3."
              description={
                <>
                  Kun olet tehnyt johtopäätöksen, muuta havainnon tyyppiä
                  (tuntematon, vih, oma, neutr) Marker Details-näkymässä
                  kohdassa <strong>Type</strong>.
                </>
              }
              imageSrc={pic23}
              imageClasses="mx-auto pr-5 w-[300px] p-4"
              note={
                <>
                  Huomioi TL JULK. Älä tuo käytössäsi olevaa yläjopon
                  vihollistietoa tähän - käytä peitteitä.<br></br>
                </>
              }
              description2={
                <>
                  <br />
                  Quick Pic-havainnot tulevat ilman tyyppiä - muuta vastaavasti
                  niiden tyyppi arvion tai johtopäätöksen mukaiseksi.
                </>
              }
              image2Src={pic20}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <>
                  Esimerkin (ks. kohta 1) ajoneuvohavainnossa vaihdetaan
                  tyypiksi{" "}
                  <em>
                    Ground track--Equipment--Ground vehicle--Civilian--Multi
                    passenger--Van
                  </em>
                  .
                </>
              }
              image3Src={pic24}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description4={<>Merkki päivittyy.</>}
            />
            <GuideSection
              number="4."
              description={
                <>
                  Jatka havainnon käsittelyä Marker Details-valikossa
                  muuttamalla sen nimeä merkiksi siitä, että se on HQ:n
                  käsittelemä.
                  <br />
                  <br />
                  Lisää nimen alkuun <strong>alaviiva</strong>.
                </>
              }
              imageSrc={pic25}
              imageClasses="mx-auto pr-5 w-[400px] p-4"
              description2={
                <>
                  Käsittelytoimenpiteet suoritettu - seuraavaksi päätökset
                  jakamisesta.
                </>
              }
              note2={
                <>
                  <br />
                  Muista ylläpitää kaikista lähteistä saatuja havaintoja
                  tiedusteludiaariin.
                </>
              }
            />
            <GuideSection
              number="5."
              description={
                <>
                  Päätä, jaetaanko havainto omalle joukolle{" "}
                  <strong>erityisen ilmoituksen</strong> kanssa, vai ilman
                  erityistä ilmoitusta:
                  <br />
                  <br />
                  <strong>Tee erityinen ilmoitus</strong>, eli lähetä merkin
                  lisäksi viesti, sinulle käsketyn hälytystaulukon mukaan{" "}
                  <em>heti ilmoitettavista asioista.</em>:
                </>
              }
              note={
                <>
                  Erityinen ilmoitus tehdään hälytystaulukossa käsketyin
                  viestivälinein.
                  <br /> <br />
                </>
              }
              description2={
                <>
                  Molemmissa tapauksissa lähetä havainto joukon{" "}
                  <strong>Recon Feediin</strong>, jolloin kaikki tilaajat
                  näkevät sen. <br></br>Tee niin painamalla{" "}
                  <strong>Marker Details</strong>-valikossa kuvan mukaista{" "}
                  <strong>Send</strong>-nappia.
                </>
              }
              image2Src={pic26}
              image2Classes="mx-auto pr-10 w-[200px] p-4"
              description3={
                <>
                  Valitse Include Attachments-kysymykseen <strong>Yes</strong>.
                </>
              }
              image3Src={pic27}
              image3Classes="mx-auto pr-10 w-[300px] p-4"
            />
            <GuideSection
              number="6."
              description={
                <>
                  Oikeaan reunaan aukeaa painamalla Send-nappia Marker
                  Details-valikossa <strong>Send To</strong>-valikko.
                </>
              }
              imageSrc={pic28}
              imageClasses="mx-auto pr-8 w-[300px] p-4"
              description2={
                <>
                  <li>
                    Avaa <strong>Data Sync Feeds-valinta.</strong>.
                  </li>
                  <li>Valitse Recon Feed.</li>
                  <li>
                    Paina alareunasta <strong>Send</strong>-nappia.
                  </li>
                  <br></br>
                  Havainto on käsitelty ja jaettu joukolle.
                </>
              }
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/Usage/win2"
          forwardUrl="/app/services/tak/Usage/win4"
        />
      </Layout>
    </div>
  );
}
