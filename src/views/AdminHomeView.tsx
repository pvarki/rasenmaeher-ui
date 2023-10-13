import trooper from "../assets/trooper3.png";
import { Card } from "../components/Card"
import { TextCard } from "../components/TextCard"
import { CardsContainer } from "../components/CardsContainer"
import { Layout } from "../components/Layout";
import { ServiceTak } from "./servicetak/ServiceTak";
import { useNavigate } from "react-router-dom";

export function AdminHomeView() {
  const navigate = useNavigate();
  return (
    <Layout  showNavbar={true} navbarTitle="metsa-kota.pvarki.fi">
    <div className="flex flex-col flex-shrink-0 gap-3">
      <CardsContainer>
        <TextCard title="Olet kirjautunut adminina." details="<strong>Hallitse käyttäjiä</strong> lisätäksesi taistelijoita ympäristöösi. Ympäristössäsi olevat palvelut ovat ohessa. Avaa palvelun kortti ottaaksesi sen itse käyttöön."/>
        
        <Card title="Hallitse käyttäjiä" image={trooper} url="/app/user-management" />
      </CardsContainer>
      <ServiceTak />    
    </div>
    </Layout>
  );
}

//  <Card title="Ota käyttöön TAK" image={tak} url="/app/services/tak"/>