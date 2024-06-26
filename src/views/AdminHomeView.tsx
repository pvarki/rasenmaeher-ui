import trooper from "../assets/icons/trooper3.png";
import taistelija from "../assets/heroimages/sanla.jpeg";
import { Card } from "../components/Card";
import { TextCard } from "../components/TextCard";
import { CardsContainer } from "../components/CardsContainer";
import { Layout } from "../components/Layout";
import { ServiceTak } from "./servicetak/ServiceTak";
import { useUserType } from "../hook/auth/useUserType";
import { Trans, useTranslation } from "react-i18next";

export function AdminHomeView() {
  const { callsign } = useUserType();
  const { t } = useTranslation();

  return (
    <Layout showNavbar={true} heroImage={taistelija} showFooter={true}>
      <div className="flex flex-col flex-shrink-0 gap-3">
        <CardsContainer>
          <TextCard
            title={
              <Trans
                i18nKey="adminHomeView.welcome"
                components={{ em: <em /> }}
                values={{ callsign }}
              />
            }
            details={
              <Trans
                i18nKey="adminHomeView.manageUsers"
                components={{ strong: <strong />, br: <br /> }}
              />
            }
          />

          <Card
            title={t("adminHomeView.manageUsersTitle")}
            image={trooper}
            url="/app/admin/manageusers"
          />
        </CardsContainer>
        <ServiceTak />
      </div>
    </Layout>
  );
}
