import { UnfoldableCard } from "../../../../components/UnfoldableCard";
import takusageflow from "../../../../assets/takguides/takusageflow.svg"

export function ServiceTakUsageFlowCard() {
    return (
        <div className="w-full m-2 p-0">  

            <UnfoldableCard 
                title="Flowchart: Havaintotiedon kulku" 
                initialOpen={false} 
                imageSrc={takusageflow}
                imageClasses='w-[500px]'
                description1='
                <small>
                <strong>1. <em>Taistelija havaitsee ilmoitettavaa</em></strong>
                <li>Taistelija varmistaa, että oma ryhmä tietää.</strong>
                <li>Taistelija lähettää merkin <strong>HQ-roolille.</strong></li>
                <li>Komentopaikan käyttäjät ovat HQ-roolissa.</li>
                <li>Komentopaikka vastaanottaa havainnon.</li>
                </small>
                '
                description2='
                <small>
                <strong>2. KNTOP toiminta vastaanottaessa havainto</strong>
                <li>Komentopaikka <strong>käsittelee havainnon:</strong> </li>
                <li>- eli varmentaa ja tulkitsee sen, lisäten tietoa</li>
                <li>Komentopaikka <strong>lähettää</strong> merkin <strong>Recon Feediin</strong></li>
                </small>
                '
                description3='
                <small>
                <strong>3. Lopputilanne</strong>
                <li>Kaikki käyttäjät ovat Recon Feedin tilaajia</li>
                <li>Kaikki käyttäjät näkevät uuden merkin</li>
                <li>Merkeistä koostuu <strong>tiedustelutilannekuva</strong></li>
                </small>
                '
                description4='
                <small>
                Tavoitetila: Koko joukko tietää olennaiset tapahtumat minuuttien kuluessa niiden havaitsemisesta.
                </small>'
            />
        </div>
            );
        }