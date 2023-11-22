import { Layout } from "../../../../components/Layout";
import { StatusBar } from "../../../../components/StatusBar";
import { CardsContainer } from "../../../../components/CardsContainer";
import { NavigateButtons } from "../../../../components/NavigateButtons";
import { ServiceTakUsageCard } from "../helpers/ServiceTakUsageCard";
import { UnfoldableCard } from "../../../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../../../components/ServiceInfoCard";
import Wintak from "../../../../assets/icons/wintak.png";

export function TakUsageWin3() {
  return (
    <div className="pb-32">
      <Layout
        showNavbar={true}
        showFooter={false}
        navbarTitle="Käyttö joukossa: WinTAK"
        backUrl="/app/services/tak/usage"
      >
        <StatusBar
          title="Toimi komentopaikkana (3/4)"
          progressMax={4}
          progressNow={3}
        />
        <CardsContainer>
          <div className="flex flex-col items-center w-full gap-2 justify-center p-5">
            <ServiceInfoCard
              title="WinTAK"
              image={Wintak}
              details={
                <>
                  Käyttö joukossa WinTAK - vaihe 3:{" "}
                  <strong>Toimi komentopaikkana</strong>
                  <br />
                </>
              }
            >
              <ServiceTakUsageCard />
            </ServiceInfoCard>
            <UnfoldableCard
              title="1. Komentopaikkana toimiminen"
              styling="bg-backgroundLight"
              steps={[
                {
                  description: (
                    <>
                      Mikäli olet seurannut ohjeita, tiedät nyt, miten toiminta
                      WinTAKilla komentopaikkana tapahtuu.
                      <br />
                      <br />
                      Seuraa <strong>Käyttömallia</strong> jatkuvassa
                      toiminnassa. Käyttömalli kuvataan{" "}
                      <em>
                        Käyttö joukossa-etusivulla taistelijan ja komentopaikan
                        näkökulmasta.
                      </em>
                      <br />
                      <br />
                      Seuraavalla sivulla kuvataan tietohuolto. Alla muistilista
                      komentopaikan tehtävistä kokonaisuudessaan.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Komentopaikalla tulee tehdä jatkuvasti muun muassa
                      seuraavia tehtäviä:
                      <br />
                      <br />
                      <li>
                        <strong>1. Tunne</strong> tarkoin joukon tehtävä ja sen
                        suoritusvaihe joukkueen ja ryhmän tarkkuudella.
                      </li>
                      <li>
                        <strong>2. Vastaanota</strong> joukolta heti
                        ilmoitettavat asiat.
                      </li>
                      <li>
                        <strong>3. Vastaanota</strong> joukolta määräaikaiset ja
                        -muotoiset (tiettyyn kellonaikaan saapuvat)
                        tilanneilmoitukset.
                      </li>
                      <li>
                        <strong>4. Ylläpidä</strong> viestipäiväkirjaa kaikin
                        välinein tulleista ilmoituksista.
                      </li>
                      <li>
                        <strong>5. Ylläpidä</strong> numeroitua
                        tiedusteludiaaria omalta joukolta, naapureilta ja
                        ylhäältä tulleista havainnoista ja vihollistiedoista.
                      </li>
                      <li>
                        <strong>6. Ylläpidä</strong> tietojärjestelmiä, joista
                        TAK on yksi.
                      </li>
                    </>
                  ),
                  note: (
                    <>
                      Nämä 6 tehtävää toimivat komentopaikan tietolähteinä.
                      Käytä näitä lähteitä, ja aktiivisesti etsi ja kysele lisää
                      tietoa. Tehtäväsi on tiedon avulla muodostaa tilannekuva -
                      eli käsittää, mitä ympärillä tapahtuu <em>nyt</em>,{" "}
                      <em>6 tunnin</em> ja <em>24 tunnin</em> päästä.<br></br>
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Tällä tehtävälläsi TAK-palvelu{" "}
                      <em>on vain yksi väline</em>. Älä anna järjestelmän ja
                      ilmoitusten viedä huomiota - käytä niitä kerätäksesi
                      tietoa, ja jakaaksesi sitä joukolle. <br></br>Näin luodaan
                      joukon tietoylivoima omassa ympäristössä.
                    </>
                  ),
                },
              ]}
            />
          </div>
        </CardsContainer>
        <NavigateButtons
          backUrl="/app/services/tak/usage/win2"
          forwardUrl="/app/services/tak/usage/win4"
        />
      </Layout>
    </div>
  );
}
