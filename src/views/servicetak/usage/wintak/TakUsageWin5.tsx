import { Layout } from "../../../../components/Layout"
import { StatusBar } from "../../../../components/StatusBar"
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageContents } from "../helpers/ServiceTakUsageContents";
import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";

export function TakUsageWin5() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} showFooter={false} navbarTitle="Käyttö joukossa: WinTAK" backUrl="/app/services/tak/Usage">
      <CardsContainer>
        <UnfoldableCard title="Ohjeen kokoonpano" styling='bg-background' initialOpen={false}>
          <ServiceTakUsageContents />
        </UnfoldableCard>
      </CardsContainer>
    <StatusBar title="Tietohuolto" progressMax={5} progressNow={5} />
    <div className="flex justify-center items-center w-full">
    <CardsContainer>
  
        <GuideSection
          number="7."
          description='<strong>Komentopaikan tehtävä kokonaisuutena:</strong><br></br>'

          description2='Komentopaikalla tulee tehdä jatkuvasti muun muassa seuraavia tehtäviä:
          <br></br><ul>
          <li>- <strong>1. Tunne</strong> tarkoin joukon tehtävä ja sen suoritusvaihe joukkueen ja ryhmän tarkkuudella.</li>
          <li>- <strong>2. Vastaanota</strong> joukolta heti ilmoitettavat asiat.</li>
          <li>- <strong>3. Vastaanota</strong> joukolta määräaikaiset ja -muotoiset (tiettyyn kellonaikaan saapuvat) tilanneilmoitukset.<li>
          <li>- <strong>4. Ylläpidä</strong> viestipäiväkirjaa kaikin välinein tulleista ilmoituksista.</li>
          <li>- <strong>5. Ylläpidä</strong> numeroitua tiedusteludiaaria omalta joukolta, naapureilta ja ylhäältä tulleista havainnoista ja vihollistiedoista.</li> 
          <li>- <strong>6. Ylläpidä</strong> tietojärjestelmiä, joista TAK on yksi.</li>
          <br></br>'
          note2='
          Käyttämällä</strong> näitä tietolähteitä ja etsimällä <strong>itse</strong> aktiivisesti tietoa, tehtäsi on muodostaa tilannekuva - eli käsittää, mitä ympärillä tapahtuu <em>nyt</em>, <em>6 tunnin</em> ja <em>24 tunnin</em> päästä.</li><br></br>'
          description3='Tässä TAK-palvelu <em>on vain yksi väline</em>. Älä anna järjestelmän ja ilmoitusten viedä huomiota - käytä niitä kerätäksesi tietoa, ja jakaaksesi sitä joukolle. <br></br>Näin luodaan joukon tietoylivoima omassa ympäristössä.' 
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
