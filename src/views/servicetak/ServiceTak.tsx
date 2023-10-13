import tak from "../../assets/taklogo.png";
import { CardsContainer } from "../../components/CardsContainer"
import { Text } from "../../components/Text";
import { FoldableCard } from "../../components/FoldableCard";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { UnfoldableCard } from "../../components/ServicesView/UnfoldableCard";
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom";


export function ServiceTak() {
  const navigate = useNavigate();

return (
    <div>
    <CardsContainer>
    <Text title="Palvelusi"/>

    <FoldableCard title="TAK" imageSrc={tak}>
    <div className="flex flex-col items-center justify-center p-5">
    <ServiceInfoCard 
        title="Tilannekuvasovellus TAK" 
        image={tak}
        details="<ul>
        <li><strong>Pikaohje</strong> opastaa käyttöönoton.</li>
        <li><strong>Viestiperustepaketti</strong> sisältää ladattavat henkilökohtaiset perusteesi. Aseta viestiperusteet pikaohjeen avulla.</strong>
        <li>Ohje <strong>Käyttö joukossa</strong> opastaa sovelluksen käytön.
        </ul>" 
        />
        <UnfoldableCard title="Käyttötarkoitus" content="<ul>
        <li>- Käyttäjiesi seuranta reaaliajassa <strong>(GPS)</strong></li>
        <li>- Lähetä havaintoja <strong>komentopaikalle (HQ)</strong> tulkittavaksi</li>
        <li>- Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
        </ul>
        "
        />

    <Button
        variant={{ width: "full" }}
        onClick={() => navigate("/app/services/tak/quickstart")}
        styling="m-2"
        >
        Pikaohje: Käyttöönotto
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
        
        Lataa viestiperusteet
    </Button>
    </div>
    </FoldableCard> 
    </CardsContainer>
    </div>
  );
}
