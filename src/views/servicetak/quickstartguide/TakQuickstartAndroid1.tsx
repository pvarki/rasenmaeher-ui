import React from 'react';

import { Text } from "../../../components/Text"
import { Layout } from "../../../components/Layout"
import { GuideSection} from "../../../components/TakGuides/GuideSection";
import { CardsContainer } from "../../../components/CardsContainer";
import { NavigateButtons } from "../../../components/NavigateButtons";


export function TakQuickstartAndroid1() {

  return (
    <div className="pb-32">
    <Layout showNavbar={true} navbarTitle="TAK-käyttöönotto Android" backUrl="/app/services/tak/quickstart">
    <CardsContainer>
      <GuideSection
          number="1."
          description="Lataa ATAK-CIV sovellus Play Storesta ja asenna se."
          imageSrc=""/>
        <GuideSection
          number="2."
          description="Lataa viestiperusteesi Palvelut/TAK-sivulta. Tallenna .zip-tiedosto."
          note="HUOMAA! Tiedostoa ei saa purkaa!"
        />
        <GuideSection
          number="3."
          description="Avaa sovellus. Anna kaikki oikeudet, mitä applikaatio pyytää. Applikaatio saattaa antaa virheilmoituksen, mutta voit painaa Wait-valintaa."
        />
    </CardsContainer>
    <NavigateButtons />

    
    </Layout>
    </div>
  );
}

