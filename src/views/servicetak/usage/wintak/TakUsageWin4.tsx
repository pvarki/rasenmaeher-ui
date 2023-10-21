import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { GuideSection } from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function TakUsageWin4() {
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
            title="Ohjeen kokoonpano"
            styling="bg-background"
            initialOpen={false}
          >
            <ServiceTakUsageContents />
          </UnfoldableCard>
        </CardsContainer>
        <StatusBar
          title="Toimi komentopaikkana"
          progressMax={5}
          progressNow={4}
        />
        <div className="flex justify-center items-center w-full">
          <CardsContainer>
            
        <GuideSection
          number="1."
          description={
          <>
            Mikäli olet seurannut ohjeita, tiedät nyt, miten toiminta WinTAKilla komentopaikkana tapahtuu.
            <br/>
            <br/>
            Seuraa <strong>Käyttömallia</strong> jatkuvassa toiminnassa. Käyttömalli kuvataan <em>Käyttö joukossa-etusivulla taistelijan ja komentopaikan näkökulmasta.</em>
            <br/>
            <br/>
            Seuraavalla sivulla kuvataan tietohuolto.
            Alla muistilista komentopaikan tehtävistä kokonaisuudessaan.
          </>}
            />
        <GuideSection
          number="2."
          description={<>
          <strong>Komentopaikan tehtävä kokonaisuutena:</strong>
          </>}

          description2={
          <>
          Komentopaikalla tulee tehdä jatkuvasti muun muassa seuraavia tehtäviä:
          <br/>
          <br/>
            <li><strong>1. Tunne</strong> tarkoin joukon tehtävä ja sen suoritusvaihe joukkueen ja ryhmän tarkkuudella.</li>
            <li><strong>2. Vastaanota</strong> joukolta heti ilmoitettavat asiat.
            </li>
            <li><strong>3. Vastaanota</strong> joukolta määräaikaiset ja -muotoiset (tiettyyn kellonaikaan saapuvat) tilanneilmoitukset.
            </li>
            <li><strong>4. Ylläpidä</strong> viestipäiväkirjaa kaikin välinein tulleista ilmoituksista.
            </li>
            <li><strong>5. Ylläpidä</strong> numeroitua tiedusteludiaaria omalta joukolta, naapureilta ja ylhäältä tulleista havainnoista ja vihollistiedoista.
            </li> 
            <li><strong>6. Ylläpidä</strong> tietojärjestelmiä, joista TAK on yksi.
            </li>

          </>}

          note2=
          {<>
          Nämä 6 tehtävää toimivat komentopaikan tietolähteinä. Käytä näitä lähteitä, ja aktiivisesti etsi ja kysele lisää tietoa. Tehtäväsi on tiedon avulla muodostaa tilannekuva - eli käsittää, mitä ympärillä tapahtuu <em>nyt</em>, <em>6 tunnin</em> ja <em>24 tunnin</em> päästä.<br></br>
          </>}
          description3={<>
            <br/>Tällä tehtävälläsi TAK-palvelu <em>on vain yksi väline</em>. Älä anna järjestelmän ja ilmoitusten viedä huomiota - käytä niitä kerätäksesi tietoa, ja jakaaksesi sitä joukolle. <br></br>Näin luodaan joukon tietoylivoima omassa ympäristössä.
          </>}
        />
          </CardsContainer>
        </div>
        <NavigateButtons
          backUrl="/app/services/tak/Usage/win3"
          forwardUrl="/app/services/tak/Usage/win5"
        />
      </Layout>
    </div>
  );
}
