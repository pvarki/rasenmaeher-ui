import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import data2 from "../../../../assets/takguides/atak/02-DataPackage.png";
import etsi3 from "../../../../assets/takguides/atak/03-EtsiKansio.png";
import done4 from "../../../../assets/takguides/atak/04-Done.png";
import ilmo5 from "../../../../assets/takguides/atak/05-SaatIlmoituksen.png";
import yhteys6 from "../../../../assets/takguides/atak/06-VarmistaYhteys.png";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";

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
          title="Aseta viestiperusteet"
          progressMax={4}
          progressNow={2}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            <GuideSection
              number="1."
              imageClasses="m-3 w-[300px]"
              description={
                <>
                  Valitse <strong>Data Package</strong>.
                </>
              }
              imageSrc={data2}
              description2={
                <>
                  <em>Select Data Package</em>-valikko aukeaa.
                </>
              }
            />
            <GuideSection
              number="2."
              imageSrc={etsi3}
              imageClasses="m-3 w-[300px]"
              description={
                <>
                  Etsi kansio, johon latasit viestiperustetiedostosi <strong>Nimi.zip</strong>
                  <br />
                  Vinkki: Paina <strong>Date</strong> nähdäksesi viimeisimpänä ladatun tiedoston, todennäköisesti viestiperusteesi.
                </>
              }
              description2={
                <>
                  Valitse tiedosto.
                </>
              }
            />
            <GuideSection
              number="3."
              description={
                <>
                  Paina <strong>Done</strong>.
                </>
              }
              imageSrc={done4}
              imageClasses="m-3 w-[300px]"
              description2={
                <>
                  Saat muutaman ilmoituksen konfiguraatiotiedostojen latautumisesta.
                </>
              }
              image2Src={ilmo5}
              image2Classes="m-3 w-[300px]"
              description4={
                <>
                  Alkukonfiguraatio on valmis.
                </>
              }
              image3Src={yhteys6}
              image3Classes="m-3 w-[300px]"
              description3={
                <>
                  Tarkista oikeasta alakulmasta, että palvelinyhteytesi on aktivoitunut (vihreä merkkivalo)
                </>
              }
            />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/quickstart/android1"
          forwardUrl="/app/services/tak/quickstart/android3"
        />
      </Layout>
    </div>
  );
}


