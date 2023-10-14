import taklogo from "../../assets/taklogo.png";
import { Card } from "../../components/Card"
import { TextCard } from "../../components/TextCard"
import { CardsContainer } from "../../components/CardsContainer"
import { Layout } from "../../components/Layout";

export function ServicesView() {
  return (
    <Layout showNavbar={true} navbarTitle="Palvelut" backUrl="/app">
    <div className="flex flex-col gap-3">
      <CardsContainer>
        <TextCard title="Palvelusi ohessa." details="Napauta kuvaketta ottaaksesi palvelun käyttöön laitteellasi ja lukeaksesi ohjeistusta."/>
        <Card title="TAK" image={taklogo} url="/app/services/tak" />
      </CardsContainer>    
    </div>
    </Layout>
  );
}