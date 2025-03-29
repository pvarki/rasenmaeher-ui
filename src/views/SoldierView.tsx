import { Trans } from "react-i18next";
import { Layout } from "../components/Layout";
import { CardsContainer } from "../components/CardsContainer";
import LoadingComponent from "../components/Loading/LoadingComponent";
import { TextCard } from "../components/TextCard";
import { useCurrentProducts } from "./products/hooks/useCurrentProducts";
import { ProductList } from "./products/ProductList";
import { useUserType } from "../hook/auth/useUserType";
import taistelija from "../assets/heroimages/taistelija.jpeg";

export function SoldierView() {
  const { callsign } = useUserType();
  const [products, isReady, hasErrors] = useCurrentProducts();

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

      { hasErrors ? (
        <div>Error</div>
      ) : (
        isReady ? (
          <ProductList products={ products } />
        ) : (
          <LoadingComponent />
        )
      ) }

    </Layout>
  );
}
