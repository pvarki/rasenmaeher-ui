import React from 'react';
import taklogo from "../assets/taklogo.png";
import { Layout } from "../components/Layout"
import { ServiceInfoCard } from "../components/ServicesView/ServiceInfoCard";
import { CardsContainer } from "../components/CardsContainer";
import { UnfoldableCard } from "../components/ServicesView/UnfoldableCard";
import { Button } from "../components/Button"

export function ServiceTakView() {
  return (
    <Layout showNavbar={true} navbarTitle="TAK" backUrl="/app">
    <CardsContainer>
      <ServiceInfoCard image={taklogo}/>

      <UnfoldableCard title="Käyttötarkoitus" content="<ul>
        <li>- Käyttäjiesi seuranta reaaliajassa <strong>(GPS)</strong></li>
        <li>- Lähetä havaintoja <strong>komentopaikalle (HQ)</strong> tulkittavaksi</li>
        <li>- Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
        </ul>"/>

      <UnfoldableCard title="Käyttöönotto" content="<ul>
      <li>- Avaa 'Ota TAK käyttöön' ja seuraa ohjeita.</li>
      <li>- 'Käyttö joukossa'-ohje kertoo sinulle, miten käytät sovellusta.</li>
      </ul>"/>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak")}
      >
        Lataa viestiperustepakettisi
    </Button>
    </CardsContainer>
    
    </Layout>
  );
}

