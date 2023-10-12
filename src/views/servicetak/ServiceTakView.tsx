import React from 'react';
import taklogo from "../../assets/taklogo.png";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout"
import { ServiceInfoCard } from "../../components/ServicesView/ServiceInfoCard";
import { CardsContainer } from "../../components/CardsContainer";
import { UnfoldableCard } from "../../components/ServicesView/UnfoldableCard";
import { Button } from "../../components/Button"

export function ServiceTakView() {
  const navigate = useNavigate();

  return (
    <Layout showNavbar={true} navbarTitle="TAK" backUrl="/app">
    <CardsContainer>
      <ServiceInfoCard title="Tilannekuvasovellus TAK" image={taklogo}/>

      <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak")}
        styling="m-2"
      >
        Lataa viestiperustepakettisi
    </Button>

      <UnfoldableCard title="Käyttöönotto" content="<ul>
      <li>- Avaa 'Ota TAK käyttöön' ja seuraa ohjeita.</li>
      <li>- 'Käyttö joukossa'-ohje kertoo sinulle, miten käytät sovellusta.</li>
      </ul>"/>

      <UnfoldableCard title="Käyttötarkoitus" content="<ul>
        <li>- Käyttäjiesi seuranta reaaliajassa <strong>(GPS)</strong></li>
        <li>- Lähetä havaintoja <strong>komentopaikalle (HQ)</strong> tulkittavaksi</li>
        <li>- Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
        </ul>"/>

    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/quickstart")}
        styling="m-2"
      >
        Ohje käyttöönottoon
    </Button>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/usage")}
        styling="m-2"
      >
        Ohje käyttötarkoitukseen
    </Button>

    </CardsContainer>
    
    </Layout>
  );
}
