import { Trans } from "react-i18next";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer";
import { TextCard } from "../components/TextCard";
import { ServiceTak } from "./servicetak/ServiceTak";
import { useUserType } from "../hook/auth/useUserType";
import taistelija from "../assets/heroimages/taistelija.jpeg";

export function SoldierView() {
  const { callsign } = useUserType();

  return (
    <Layout showNavbar={true} heroImage={taistelija} showFooter={true}>
      <CardsContainer>
        <TextCard
          title={
            <Trans
              i18nKey="soldierView.welcome"
              components={{ em: <em /> }}
              values={{ callsign }}
            />
          }
          details={
            <Trans
              i18nKey="soldierView.details"
              components={{ strong: <strong />, br: <br /> }}
            />
          }
        />
      </CardsContainer>
      <ServiceTak />
    </Layout>
  );
}
