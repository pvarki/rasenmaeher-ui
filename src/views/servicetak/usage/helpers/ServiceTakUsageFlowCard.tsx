import { CardsContainer } from "../../../../components/CardsContainer"
import { ButtonFoldableCard } from "../../../../components/ButtonFoldableCard";
import { GuideSection} from "../../../../components/TakGuides/GuideSection";
import { ServiceTakUsageCard } from "./ServiceTakUsageCard"
import takusageflow from "../../../../assets/takguides/takusageflow.svg"



export function ServiceTakUsageFlowCard() {


return (
    <div>
    <CardsContainer>
    <ButtonFoldableCard title="Käyttömalli">
    <div className="flex flex-col items-center justify-center p-5">
    
    <GuideSection
        description="Tilannekuvasovellus TAK" 
        imageSrc={takusageflow}
        imageClasses="mx-auto p-4 pr-5 w-[600px]"


     />
    </div>
    </ButtonFoldableCard> 
    </CardsContainer>
    </div>
  );
}
