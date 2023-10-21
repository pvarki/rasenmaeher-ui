import { UnfoldableCard } from "../../../../components/UnfoldableCard";

export function ServiceTakUsageAtCPCard() {
  return (
    <div className="w-full m-1 p-0">
      <UnfoldableCard
        title="TAK ja komentopaikka"
        initialOpen={false}
        description1={<>
            1. TAK on työkalu tiedon keräämiseen joukoilta, ja tiedon jakamiseen sille.
            </>}
        description2={<>
            2. Komentopaikkana käytät TAKissa Team Rolea <strong>HQ</strong>, joka luo Feedit sekä vastaanottaa ja käsittelee havaintoja.
            </>}
        description3={<>
            3. Tulkinta: Varmista havainto, tee johtopäätös <em>jos mahdollista</em>. Kaikki varmistetut havainnot Recon Feediin.
            </>}
        description4={<>
            4. Ylläpidä Recon Feediä lähettämällä siihen merkkejä, muuttamalla siinä olevien merkkien tietoja ja poistaessa niitä joko tiedon tai tilanteen muuttuessa.
            </>}
      />
    </div>
  );
}
