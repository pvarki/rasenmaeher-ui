
import android from "../../../assets/android.svg";
import sanla from "../../../assets/heroimages/sanla.jpeg";
import apple from "../../../assets/apple.svg";
import windows from "../../../assets/windows.svg";
import { Text } from "../../../components/Text"
import { Layout } from "../../../components/Layout"
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";



export function ServiceTakUsageView() {

  return (
    <div className="pb-10">
    <Layout showNavbar={true} showFooter={true} heroImage={sanla} navbarTitle="TAK: Käyttö joukossa" backUrl="/app">
    <Text
        title="Mitä laitetta käytät?"
      />
    <CardsContainer>
      <Card title="Android" image={android} url="/app/services/tak/usage/android1" />
      <Card title="iOS" image={apple} url="/app/services/tak/usage/ios1" />
      <Card title="Windows" image={windows} url="/app/services/tak/usage/win1" />
      
    </CardsContainer>
    

    
    </Layout>
    </div>
  );
}

