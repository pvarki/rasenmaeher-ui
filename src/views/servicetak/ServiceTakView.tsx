import React from 'react';
import taklogo from "../../assets/taklogo.png";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout"
import { Text } from "../../components/Text"
import { ServiceInfoCard } from "../../components/ServicesView/ServiceInfoCard";
import { CardsContainer } from "../../components/CardsContainer";
import { UnfoldableCard } from "../../components/ServicesView/UnfoldableCard";
import { Button } from "../../components/Button"

export function ServiceTakView() {
  const navigate = useNavigate();

  return (
    <Layout showNavbar={true} navbarTitle="TAK" backUrl="/app">
    <CardsContainer>
      <ServiceInfoCard 
      title="Tilannekuvasovellus TAK" 
      image={taklogo}
      details="<ul>
      <li><strong>Pikaohje</strong> opastaa käyttöönoton.</li>
      <li><strong>Viestiperustepaketti</strong> sisältää ladattavat henkilökohtaiset perusteesi. Aseta ne pikaohjeen avulla.</strong>
      
      </ul/>" 
      />
      <UnfoldableCard title="Käyttötarkoitus" content="<ul>
        <li>- Käyttäjiesi seuranta reaaliajassa <strong>(GPS)</strong></li>
        <li>- Lähetä havaintoja <strong>komentopaikalle (HQ)</strong> tulkittavaksi</li>
        <li>- Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
        </ul>
        <br></br>
        <strong>Ohje Käyttö joukossa</strong> opastaa, miten sovellusta käytetään.
        "/>

    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/quickstart")}
        styling="m-2"
      >
        Pikaohje: Käyttöönotto
    </Button>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/usage")}
        styling="m-2"
      >
        Käyttö joukossa
    </Button>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak")}
        styling="m-2"
      >
        Lataa viestiperustepakettisi
    </Button>

    </CardsContainer>
    
    </Layout>
  );
}

