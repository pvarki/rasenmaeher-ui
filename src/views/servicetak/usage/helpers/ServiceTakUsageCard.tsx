import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title="Käyttötarkoitus lyhyesti"
        initialOpen={false}
        content={<>  
        <ul>
            <li>Käyttäjiesi seuranta reaaliajassa <em>(GPS)</em></li>
            <li>Lähetä havaintoja komentopaikalle (HQ) tulkittavaksi</li>
            <li>Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ) muodostaa joukollesi</li>
        </ul>
        </>}
      />
    </div>
  );
}
