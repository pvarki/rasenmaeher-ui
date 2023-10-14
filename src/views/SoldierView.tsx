import { BookmarkRemainder } from "../components/BookmarkRemainder";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer"
import { TextCard } from "../components/TextCard"
import { ServiceTak } from "./servicetak/ServiceTak";
import taistelija from "../assets/heroimages/taistelija.jpeg";


export function SoldierView() {
  return (
    <Layout showNavbar={true} navbarTitle="metsa-kota.pvarki.fi" heroImage={taistelija}>
      <CardsContainer>
        <TextCard title="Kirjautunut käyttäjänä [user]" details="Tervetuloa joukkosi PVARKI-ympäristöön! Alla käytössäsi olevat <strong>Palvelut.</strong> Avaa ottaaksesi ne käyttöön laitteellasi."/>
      </CardsContainer>
      <ServiceTak />  
      <CardsContainer>
        <BookmarkRemainder />
      </CardsContainer>
    </Layout>
  );
}
