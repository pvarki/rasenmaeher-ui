import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import ITAK from "../../../../assets/icons/iTAK.png";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic15 from "../../../../assets/takguides/itak/itakquickstart15.png";
import pic16 from "../../../../assets/takguides/itak/itakquickstart16.png";
import pic17 from "../../../../assets/takguides/itak/itakquickstart17.png";
import pic18 from "../../../../assets/takguides/itak/itakquickstart18.png";
import pic19 from "../../../../assets/takguides/itak/itakquickstart19.png";
import pic12 from "../../../../assets/takguides/itak/itakquickstart12.png";
import pic20 from "../../../../assets/takguides/itak/itakquickstart20.png";
import pic43 from "../../../../assets/takguides/itak/itakquickstart43.png";

export function TakQuickstartIos3() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="iTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Muodosta palvelinyhteys (3/5)"
          progressMax={5}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="iTAK"
              image={ITAK}
              details={
                <>
                  iTAK käyttöönotto - vaihe 3:{" "}
                  <strong>muodosta palvelinyhteys</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa iTAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Avaa</strong> Server-valikko
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Avaa <strong>Asetukset</strong>. Asetusten kuvake,
                  hammasratas, sijaitsee iTAKin ruudun oikeassa yläkulmassa.
                </>
              }
              image2Src={pic15}
              image2Classes="mx-auto pr-5 w-[90px] p-4"
              description2={
                <>
                  <br />
                  b. Valitse <strong>Network</strong>.
                </>
              }
              image3Src={pic16}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <>
                  <br />
                  c. Valitse <strong>Servers</strong>.
                </>
              }
              image4Src={pic17}
              image4Classes="mx-auto pr-5 w-[240px] p-4"
              description4={<>Avautuu tyhjä ruutu "Servers."</>}
            />
            <UnfoldableCard
              title={
                <>
                  2. <strong>Aseta</strong> viestiperustepaketti iTAKiin
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  a. Ladataan viestiperustepakettisi iTAKiin. Paina{" "}
                  <strong>Plus</strong>-symbolia <em>(Add TAK Server)</em>{" "}
                  oikeassa alakulmassa.
                </>
              }
              image2Src={pic18}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  b. Sovellus kysyy, miten palvelin lisätään. Valitse{" "}
                  <strong>Upload Server Package</strong>.
                </>
              }
              image3Src={pic19}
              image3Classes="mx-auto pr-5 w-[240px] p-4"
              description3={
                <>
                  <br />
                  c. Aukeaa Selaa-valikko. Etsi kansio, johon latasit
                  viestiperustetiedostosi <strong>Nimi.zip</strong>.
                </>
              }
              image4Src={pic12}
              image4Classes="mx-auto pr-5 w-[240px] p-4"
              note4={
                <>
                  d. Huomaa, että tässä vaiheessa sinulla tulee olla
                  viestiperustetiedosto <em>Nimi.zip</em> ladattuna puhelimeesi.
                </>
              }
              description6={
                <>
                  Mikäli et vielä ladannut viestiperustepakettia, lataa se
                  Rasenmaeherin TAK-päävalikosta napista{" "}
                  <em>Lataa viestiperusteesi</em>.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  3. <strong>Varmista</strong>, että yhteys toimii
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Kun viestiperustepaketti on latautunut, palvelimen ja vihreä
                  merkkivalo tulee näkyviin.
                </>
              }
              image2Src={pic20}
              image2Classes="mx-auto pr-5 w-[240px] p-4"
              description2={
                <>
                  <br />
                  Palaa karttanäkymään ylhäältä vasemmalta paluunuolilla.
                </>
              }
              image3Src={pic43}
              image3Classes="mx-auto pr-5 w-[150px] p-4"
              description3={
                <>
                  <small>
                    <em>
                      Karttanäkymässä oikealla alhaalla tulee vihreä merkkivalo
                      ja teksti CONNECTED.
                    </em>
                  </small>
                  <br />
                  <br />
                  Seuraavaksi muutetaan sovelluksen koordinaatti- ja
                  mittayksikköasetukset.
                </>
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/ios2"
          forwardUrl="/app/services/tak/quickstart/ios4"
        />
      </Layout>
    </div>
  );
}
