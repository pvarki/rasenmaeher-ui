import { UnfoldableCard } from "../../../../components/ServicesView/UnfoldableCard";

export function ServiceTakUsageByFighterCard() {
    return (
        <div className="w-full m-0 p-0">  

            <UnfoldableCard title="TAK ja taistelija" 
            initialOpen={false} 
            content="<ul>
            <li>- Käyttäjiesi seuranta reaaliajassa <strong>(GPS)</strong></li>
            <li>- Lähetä havaintoja <strong>komentopaikalle (HQ)</strong> tulkittavaksi</li>
            <li>- Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
            </ul>
            "
            />
        </div>
            );
        }