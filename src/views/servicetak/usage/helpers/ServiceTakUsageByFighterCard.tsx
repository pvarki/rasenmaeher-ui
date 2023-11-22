import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageByFighterCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title="TAK ja taistelija"
        initialOpen={false}
        description1={
          <>1. Kun teet havainnon, tee siitä merkki ja lähetä se HQ-roolille.</>
        }
        description2={
          <>
            2. Toimi käsketysti - merkin lisäksi tee muut käsketyt ilmoitukset.
          </>
        }
        description3={
          <>
            3. Seuraa <strong>Recon Feediä</strong>, mitä komentopaikka (HQ)
            muodostaa joukollesi.
          </>
        }
        description4={
          <>
            4. Recon Feed sisältää tulkitun tiedustelutilannekuvan joukkosi
            havainnoista.
          </>
        }
      />
    </div>
  );
}
