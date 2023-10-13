import { BookmarkRemainder } from "../components/BookmarkRemainder";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer"
import { TextCard } from "../components/TextCard"
import { Card } from "../components/Card"
import { ServiceTak } from "./servicetak/ServiceTak";
import services from "../assets/byod2.png";

export function SoldierView() {
  return (
    <Layout showNavbar={true} navbarTitle="metsa-kota.pvarki.fi">
      <BookmarkRemainder />
      <CardsContainer>
        <TextCard title="Kirjautunut käyttäjänä [user]" details="Tervetuloa joukkosi PVARKI-ympäristöön! Alla käytössäsi olevat <strong>Palvelut.</strong> Avaa ottaaksesi ne käyttöön laitteellasi."/>
        
      </CardsContainer>
      <ServiceTak />  
    </Layout>
  );
}
