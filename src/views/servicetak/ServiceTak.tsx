import tak from "../../assets/taklogo.png";
import { CardsContainer } from "../../components/CardsContainer"
import { FoldableCard } from "../../components/FoldableCard";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";
import { ServiceTakUsageCard} from "./usage/helpers/ServiceTakUsageCard"


export function ServiceTak() {
  const navigate = useNavigate();

return (
    <div>
    <CardsContainer>
    <FoldableCard title="TAK" imageSrc={tak}>
    <div className="flex flex-col items-center justify-center p-5">
    <ServiceInfoCard 
        title="Tilannekuvasovellus TAK" 
        image={tak}
        details="<ul>
        <li><strong>Käyttöönotto-ohje</strong> opastaa palvelun käyttöönoton laitteellesi.</li>
        <li>Ohje <strong>Käyttö joukossa</strong> opastaa, miten käytät sovellusta perusmallin mukaisesti.
        <li><strong>Viestiperustepaketti</strong> sisältää ladattavat henkilökohtaiset perusteesi. 
        <br></br>Aloita käyttöönotto-ohjeesta.</strong>
        </ul>" 
        />

        <ServiceTakUsageCard />

    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/quickstart")}
        styling="m-2"
        >
        Käyttöönotto-ohje
    </Button>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/usage")}
        styling="m-2"
        >
        Käyttö joukossa
    </Button>
    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak")}
        styling="bg-success-700 m-2"
        >
        
        Lataa viestiperustepaketti
    </Button>
    </div>
    </FoldableCard> 
    </CardsContainer>
    </div>
  );
}
