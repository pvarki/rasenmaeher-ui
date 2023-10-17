import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";
import takusageflow from "../../../../assets/takguides/takusageflow.svg"

export function ServiceTakUsageFlowCard() {
    return (
        <div className="w-full m-0 p-0">  

            <UnfoldableCard 
                title="Flowchart: Tiedon kulku" 
                initialOpen={false} 
                imageSrc={takusageflow}
                imageClasses='w-[500px]'
            />
        </div>
            );
        }