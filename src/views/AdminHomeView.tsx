import trooper from "../assets/icons/trooper3.png";
import taistelija from "../assets/heroimages/sanla.jpeg";
import { Card } from "../components/Card";
import { TextCard } from "../components/TextCard";
import { CardsContainer } from "../components/CardsContainer";
import { Layout } from "../components/Layout";
import { ServiceTak } from "./servicetak/ServiceTak";
import { useUserType } from "../hook/auth/useUserType";

export function AdminHomeView() {
  const { callsign } = useUserType();
  return (
    <Layout showNavbar={true} heroImage={taistelija} showFooter={true}>
      <div className="flex flex-col flex-shrink-0 gap-3">
        <CardsContainer>
          <TextCard
            title={
              <>
                Tervetuloa, admin-käyttäjä <em>{callsign && `${callsign}`}.</em>{" "}
              </>
            }
            details={
              <>
                <strong>Hallitse käyttäjiä</strong> lisätäksesi taistelijoita
                ympäristöösi. Joukkosi käytössä olevat palvelut ovat ohessa.
                Paina palvelun <strong>kuvaketta</strong> ottaaksesi sen
                käyttöön omalla laitteellasi.
              </>
            }
          />

          <Card
            title="Hallitse käyttäjiä"
            image={trooper}
            url="/app/admin/manageusers"
          />
        </CardsContainer>
        <ServiceTak />
      </div>
    </Layout>
  );
}
