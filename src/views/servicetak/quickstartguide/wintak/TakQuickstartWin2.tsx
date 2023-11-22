import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import Wintak from "../../../../assets/icons/wintak.png";
import windownload from "../../../../assets/icons/windownload.svg";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import pic9 from "../../../../assets/takguides/wintak/Kuva9.png";
import pic10 from "../../../../assets/takguides/wintak/Kuva10.png";
import pic11 from "../../../../assets/takguides/wintak/Kuva11.png";
import pic12 from "../../../../assets/takguides/wintak/Kuva12.png";
import pic13 from "../../../../assets/takguides/wintak/Kuva13.png";
import pic14 from "../../../../assets/takguides/wintak/Kuva13-1.png";

export function TakQuickstartWin2() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="WinTAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Lataa ja asenna WinTAK (2/4)"
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
                  WinTAK käyttöönotto - vaihe 2:{" "}
                  <strong>Lataa ja asenna WinTAK</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee.
                </>
              }
            />
            <UnfoldableCard
              title={<>1. Lataa WinTAK</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Lataa WinTAK-sovellus{" "}
                  <strong>Puolustusvoimien osoittamasta paikasta</strong>.
                  <br />
                  <br />
                  <strong>Lataa</strong> strong painamalla kuvaketta alta:
                </>
              }
              image2Src={windownload}
              image2Link="https://arkipublic.blob.core.windows.net/ohjelmistot/WinTAK-CIV-latest.zip"
              image2Classes="w-[200px]"
              note="Tärkeää! Lataa Windows-sovelluksia vain ohjeistetusta paikasta."
            />
            <UnfoldableCard
              title={<>2. Avaa asennusohjelma</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  Etsi latamaasi zip ja pura se. Etsi .msi-päätteinen
                  asennusohjelma zipin sisältä Products-kansiosta
                </>
              }
              image2Src={pic9}
              image2Classes="mx-auto pr-5 w-[290px] p-4"
              description2={
                <>Kaksoisnapauta .msi -tiedostoa. Aukeaa asennusohjelma.</>
              }
            />
            <UnfoldableCard
              title={<>3. Asenna käyttäen asennusohjelmaa</>}
              styling="bg-backgroundLight"
              description1={
                <>
                  <br />
                  Asenna WinTAK käyttäen Setup Wizardia.
                </>
              }
              image2Src={pic10}
              image2Classes="mx-auto pr-5 w-[300px] p-4"
              description2={
                <>
                  a. Paina <strong>Next</strong>. Valitse sovelluksen
                  asennuskansio.
                </>
              }
              image3Src={pic11}
              image3Classes="mx-auto pr-5 w-[300px] p-4"
              description3={
                <>
                  b. Vaihda halutessasi asennuskansiota <strong>Browse</strong>
                  -napin kautta. Paina <strong>Next</strong>.
                </>
              }
              image4Src={pic12}
              image4Classes="mx-auto pr-5 w-[300px] p-4"
              description4={
                <>
                  c. Valitse Setup Wizardissa asennettavat lisäosat.
                  <br />
                  Valitse ainakin seuraavat lisäosat:
                  <ul>
                    <li>
                      <strong>Data Sync</strong>{" "}
                    </li>
                  </ul>
                </>
              }
              image5Src={pic13}
              image5Classes="mx-auto pr-5 w-[300px] p-4"
              description5={
                <>
                  d. Paina <strong>Next</strong>. Wizard on valmis aloittamaan
                  asennuksen, paina <strong>Install</strong>.
                </>
              }
              image6Src={pic14}
              image6Classes="mx-auto pr-5 w-[300px] p-4"
              description6={
                <>
                  e. Paina <strong>Next</strong>.
                </>
              }
              description7={
                <>
                  <br />
                  Sovellus on nyt asennettu.
                  <br />
                  Seuraavaksi avataan asennettu sovellus.
                </>
              }
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/win1"
          forwardUrl="/app/services/tak/quickstart/win3"
        />
      </Layout>
    </div>
  );
}
