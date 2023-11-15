import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import data2 from "../../../../assets/takguides/atak/02-DataPackage.png";
import etsi3 from "../../../../assets/takguides/atak/03-EtsiKansio.png";
import done4 from "../../../../assets/takguides/atak/04-Done.png";
import ilmo5 from "../../../../assets/takguides/atak/05-SaatIlmoituksen.png";
import yhteys6 from "../../../../assets/takguides/atak/06-VarmistaYhteys.png";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import ATAK from "../../../../assets/icons/tak-logo.png";

export function TakQuickstartAndroid2() {
  return (
    <div className="pb-20">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="ATAK käyttöönotto"
        backUrl="/app/services/tak/quickstart"
      >
        <StatusBar
          title="Aseta viestiperusteet (2/4)"
          progressMax={4}
          progressNow={2}
        />

        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="ATAK"
              image={ATAK}
              details={
                <>
                  ATAK käyttöönotto - vaihe 2:{" "}
                  <strong>aseta viestiperusteet</strong>
                  <br />
                  Suositus: Aseta parin kanssa - toinen näyttää ohjeita, toinen
                  tekee. Tässä vaiheessa ATAK-sovelluksen tulee olla auki.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  1. <strong>Avaa</strong> <em>Select Data Package</em> -valikko
                </>
              }
              styling="bg-backgroundLight"
              image2Classes="m-3 w-[300px]"
              description1={
                <>
                  Avatessa sovellus ensimmäistä kertaa, aukeaa TAK Device Setup.{" "}
                  <br />
                  Valitse <strong>Data Package</strong>.
                </>
              }
              image2Src={data2}
              description2={
                <>
                  <strong>
                    <em>Select Data Package</em>
                  </strong>
                  -valikko aukeaa.
                </>
              }
            />
            <UnfoldableCard
              title={
                <>
                  2. <strong>Etsi</strong> ja <strong>valitse</strong>{" "}
                  viestiperuste-zip
                </>
              }
              styling="bg-backgroundLight"
              imageSrc={etsi3}
              imageClasses="m-3 w-[300px]"
              description2={
                <>
                  Etsi kansio, johon latasit viestiperustetiedostosi{" "}
                  <strong>Nimi.zip</strong>
                  <br />
                  Vinkki: Paina <strong>Date</strong> nähdäksesi viimeisimpänä
                  ladatun tiedoston, todennäköisesti viestiperusteesi.
                </>
              }
              description3={<>Valitse tiedosto.</>}
            />
            <UnfoldableCard
              title={
                <>
                  3. Paina <strong>Done</strong> - asetukset latautuu
                </>
              }
              styling="bg-backgroundLight"
              description1={
                <>
                  Paina <strong>Done</strong>.
                </>
              }
              image2Src={done4}
              image2Classes="m-3 w-[300px]"
              description2={
                <>
                  Saat muutaman ilmoituksen konfiguraatiotiedostojen
                  latautumisesta.
                </>
              }
              image3Src={ilmo5}
              image3Classes="m-3 w-[300px]"
              description3={<>Alkukonfiguraatio on valmis.</>}
              image4Src={yhteys6}
              image4Classes="m-3 w-[300px]"
              description4={
                <>
                  Tarkista oikeasta alakulmasta, että palvelinyhteytesi on
                  aktivoitunut (vihreä merkkivalo).
                </>
              }
            />
          </div>
        </CardsContainer>

        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android1"
          forwardUrl="/app/services/tak/quickstart/android3"
        />
      </Layout>
    </div>
  );
}
