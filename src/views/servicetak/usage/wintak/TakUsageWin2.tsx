import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import Wintak from "../../../../assets/icons/wintak.png";

import pic9 from "../../../../assets/takguides/wintak/Kuva39.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva40.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva41.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva42.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva43.png";
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

export function TakUsageWin2() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/Usage"
      >
        <StatusBar
          title="Ylläpidä Recon Feediä (2/4)"
          progressMax={4}
          progressNow={2}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  Käyttö joukossa WinTAK - vaihe 2:{" "}
                  <strong>Ylläpidä Recon Feediä</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. Luo Recon Feed"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      WinTAKin työkalurivillä <strong>Home Tab</strong>issä on
                      Data Sync-työkalut.
                    </>
                  ),
                  imageSrc: pic9,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Tämä ohje olettaa, että toimit WinTAKilla{" "}
                      <strong>komentopaikkana</strong> ja siksi luot tarvittavat
                      feedit. <br /> <br />
                      Paina <strong>New Feed</strong>.
                    </>
                  ),
                  imageSrc: pic10,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <>
                      Huom. Komentopaikalla <em>yksi käyttäjä</em> luo
                      tarvittavat feedit, ja muut ottavat ne käyttöön!
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Luo uusi <strong>Feed</strong> seuraavilla tiedoilla:
                      <ul>
                        <li>
                          <strong>Name</strong>: Recon
                        </li>
                        <li>
                          <strong>Group</strong>: Public
                        </li>
                        <li>
                          <strong>Default Role</strong>: Read Only
                        </li>
                      </ul>
                    </>
                  ),
                  imageSrc: pic11,
                  imageClasses: "m-3 w-[400px]",
                  note: (
                    <>
                      <em>
                        (HUOMAA: Groupin oletusasetus pitää vaihtaa asetukseen{" "}
                        <strong>Read Only</strong>.)
                      </em>
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Uusi feed on luotu. Feedin luojalla se näkyy heti
                      tilattuna Data Sync-valikossa.
                    </>
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
              ]}
            />

            <UnfoldableCard
              title="2. Muut KNTOP-käyttäjät tilaavat feedin"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Muut komentopaikan (WinTAKin) käyttäjät tilaavat itselleen
                      luodut feedit, perusmallissa <strong>RECON</strong>
                      -feedin.
                    </>
                  ),
                  imageSrc: pic12,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Avautuvasta näkymästä valitse{" "}
                      <strong>Download and stay synced.</strong>
                    </>
                  ),
                  imageSrc: pic13,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>Feed näkyy tällöin käyttäjän Data Sync-valikossa. </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title="3. Vastaanota ilmoituksia"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      WinTAK tekee ilmoituksia kuvan mukaisilla
                      notifikaatioilla.
                    </>
                  ),
                  imageSrc: pic15,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Painamalla keltaisen lipun symbolia, avautuu{" "}
                      <strong>Notifications</strong>-näkymä.
                    </>
                  ),
                  imageSrc: pic17,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      Näkymässä ovat vastaanotetut ilmoitukset.{" "}
                      <strong>Käsittele</strong> ilmoitukset seuraavan ohjeen
                      mukaisesti ja lähetä sen päätteeksi ne{" "}
                      <strong>Recon Feediin.</strong>
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title="4. Käsittele ilmoitukset Recon Feediin"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      a. Havainnot <strong>avataan ja käsitellään</strong> näin:
                      <br></br>
                      <ul>
                        <li>
                          1. Paina ilmoitusnäkymästä ilmoitusta, jonka haluat
                          käsitellä.
                        </li>
                        <li>2. Karttanäkymä keskittyy havaintoon.</li>
                        <li>3. Klikkaa kartalla olevaa havaintoa.</li>
                        <li>
                          4. Aukeaa <strong>ympyrävalikko</strong> (alla
                          kuvassa).
                        </li>
                      </ul>
                    </>
                  ),
                  imageSrc: pic18,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      b. Valitse ympyrävalikosta roskakorin oikealla puolella
                      oleva Marker Details-kuvake. Aukeaa{" "}
                      <strong>Marker Details</strong>
                      -näkymä (alla kuvassa)
                    </>
                  ),
                  imageSrc: pic19,
                  imageClasses: "m-3 w-[400px]",
                },
                {
                  description: (
                    <>
                      c. <strong>Käsittele havainto seuraavasti:</strong>
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
                        Perusmallin mukaisesti joukon tulisi ilmoittaa
                        havainnosta myös sanomalla (välitettynä soveltuvalla
                        tavalla).
                      </li>
                    </>
                  ),
                  note: (
                    <>
                      Kun kirjaat tulkintoja, muista erottaa johtopäätös
                      alkuperäisestä kuvauksesta. Tee tämä merkinnällä{" "}
                      <em>HQ JP: (arvio tai johtopäätös)</em>
                      <br />
                      <br />
                      Muista myös TL JULK - käytä peitteistöä. <br />
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      b. Muuta havainnon tyyppiä (tuntematon, vih, oma, neutr)
                      johtopäätöksesi perusteella Marker Details-näkymässä.{" "}
                      <br /> Tee se klikkaamalla{" "}
                      <strong>otsikon vasemmalla puolella</strong> olevaa ikonia
                      (kamera: Quick Pic, merkki: esim. keltainen),{" "}
                      <strong>"Change Affiliation".</strong>
                    </>
                  ),
                  imageSrc: pic20,
                  imageClasses: "mx-auto pr-5 w-[300px] p-4",
                },
                {
                  description: (
                    <>
                      "Change Affiliation" painettuasi, aukeaa{" "}
                      <strong>Type-valikko.</strong> Muuta havainnon merkkiä
                      johtopäätöksesi mukaisesti.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic23,

                  note: (
                    <>
                      Huomioi TL JULK. Älä tuo käytössäsi olevaa yläjopon
                      vihollistietoa tähän - käytä peitteitä.
                    </>
                  ),
                },
                {
                  description: <>Merkki päivittyy.</>,
                },
                {
                  description: (
                    <>
                      Lopuksi lisäät merkin otsikkoon merkinnän{" "}
                      <strong>(eteen alaviiva)</strong> siitä, että
                      komentopaikka on käsitellyt merkin.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic25,
                },
                {
                  description: (
                    <>
                      Tämän jälkeen tee merkintä tiedusteludiaariin havainnosta
                      ja jaa se <strong>Recon Feediin</strong> seuraavien
                      ohjeiden avulla.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic25,
                },
              ]}
            />
            <UnfoldableCard
              title={
                <>
                  <em>Esimerkki havainnon käsittelystä</em>
                </>
              }
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Olet saanut ilmoituksen vartiopaikalta{" "}
                      <em>lujaa poistuneesta pakettiautosta.</em> ja tästä
                      keltaisen havaintomerkin. Avaa Marker Details ja paina
                      Change Affiliation.
                    </>
                  ),
                  imageSrc: pic20,
                  imageClasses: "mx-auto pr-5 w-[300px] p-4",
                },
                {
                  description: (
                    <>
                      <strong>Type-valikko</strong> aukeaa. Et voi tehdä
                      johtopäätöstä havainnon tyypistä, joten päivität vain sen
                      ominaisuudet ilmoituksen perusteella.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic23,
                },
                {
                  description: (
                    <>
                      Valitset tyypiksi
                      <em>
                        Ground track--Equipment--Ground vehicle--Civilian--Multi
                        passenger--Van
                      </em>
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic24,
                },
                {
                  description: (
                    <>
                      Lopuksi lisäät merkin otsikkoon merkinnän{" "}
                      <strong>(eteen alaviiva)</strong> siitä, että
                      komentopaikka on käsitellyt merkin.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic25,
                },
                {
                  description: (
                    <>
                      Merkitse havainto tiedusteludiaariin ja lähetä se{" "}
                      <strong>Recon Feediin</strong> seuraavien ohjeiden avulla.
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={<>5. Päätä, onko heti ilmoitettava asia</>}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Päätä, onko havainto <em>heti ilmoitettava asia</em> vai
                      ei.
                      <br />
                      <br /> Heti ilmoitettavat asiat on käsketty sinulle
                      erikseen. <strong>Varmistu,</strong> että tiedät mitä ne
                      ovat.
                      <strong> Lähetä merkin</strong>
                      lisäksi viesti heti ilmoitettavista asioista:
                    </>
                  ),
                  note: (
                    <>
                      TÄRKEÄÄ! Jos havainto on heti ilmoitettava asia, lähetä
                      ilmoitus käsketyillä viestivälineillä käsketyille
                      vastaanottajille.
                      <br />
                      Käytännön hyöty ratkaisee, lähetätkö viestin vai merkin
                      ensin.
                    </>
                  ),
                },
              ]}
            />
            <UnfoldableCard
              title={<>7. Lähetä merkki Recon Feediin</>}
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Jotta kaikki joukkosi TAK-käyttäjät pääsevät näkemään
                      käsittelemäsi merkin, lähetä merkki Recon Feediin
                      painamalla <strong>Marker Details</strong>-valikossa kuvan
                      mukaista <strong>Send</strong>-nappia.
                    </>
                  ),
                  imageSrc: pic26,
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                },
                {
                  description: (
                    <>
                      Valitse Include Attachments-kysymykseen{" "}
                      <strong>Yes</strong>.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic27,
                },
                {
                  description: (
                    <>
                      Oikeaan reunaan aukeaa painamalla Send-nappia Marker
                      Details-valikossa <strong>Send To</strong>-valikko.
                    </>
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic28,
                },
                {
                  description: (
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
                  ),
                  imageClasses: "mx-auto pr-5 w-[400px] p-4",
                  imageSrc: pic25,
                },
                {
                  description: (
                    <>
                      Toimi näin jokaisen <strong>käsitellyn</strong> havainnon
                      kanssa.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win1"
          forwardUrl="/app/services/tak/usage/win3"
        />
      </Layout>
    </div>
  );
}
