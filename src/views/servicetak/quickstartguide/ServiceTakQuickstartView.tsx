
import android from "../../../assets/android.svg";
import sanla from "../../../assets/heroimages/rakennettu3.jpeg";
import apple from "../../../assets/apple.svg";
import windows from "../../../assets/windows.svg";
import { Layout } from "../../../components/Layout"
import { Card } from "../../../components/Card";
import { CardsContainer } from "../../../components/CardsContainer";
import { ServiceInfoCard } from "../../../components/ServiceInfoCard";


export function ServiceTakQuickstartView() {

  return (
    <div className="pb-10">
    <Layout showNavbar={true} showFooter={true} heroImage={sanla} navbarTitle="TAK: Käyttö joukossa" backUrl="/app">

    <CardsContainer>
      <ServiceInfoCard
        title="Ota TAK käyttöön!"
        details="Valitse käyttöönotto-ohje laitteesi mukaan. Helpoin tapa tehdä käyttöönotto on <strong>parin kanssa</strong> siten, että toinen pari näyttää ohjetta ja toinen tekee."
        >
      </ServiceInfoCard>
       
      <Card title="Android" image={android} url="/app/services/tak/quickstart/android1" />
      <Card title="iOS" image={apple} url="/app/services/tak/quickstart/ios1" />
      <Card title="Windows" image={windows} url="/app/services/tak/quickstart/win1" />
      
    </CardsContainer>
    

    
    </Layout>
    </div>
  );
}

