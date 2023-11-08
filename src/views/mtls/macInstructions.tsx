import { UnfoldableCard } from "../../components/UnfoldableCard";
import pic1 from "../../assets/mtls/mtls-mac-1.png";
import pic2 from "../../assets/mtls/mtls-mac-2.png";
import pic3 from "../../assets/mtls/mtls-mac-3.png";
import pic4 from "../../assets/mtls/mtls-mac-4.png";
import pic5 from "../../assets/mtls/mtls-mac-5.png";
import pic6 from "../../assets/mtls/mtls-mac-6.png";

export function MacInstructions() {
    return (
    <main className='flex flex-col w-full gap-3'>
        <UnfoldableCard
        title="1. Lataa avaimesi"
        styling="bg-backgroundLight"
        description1={
          <>
            Paina <strong>Lataa avain</strong>-painiketta. Vastaanotat tiedoston <em>peitenimesi.pfx.</em>
          </>
        }
        image2Src={pic1}
        image2Classes='p-6'
      />
      <UnfoldableCard
        title="2. Avaa avain"
        styling="bg-backgroundLight"
        description1={
            <>
              <strong>a.</strong> <strong>Avaa</strong> lataukset-kansiosi ja kaksoiskilkkaa tiedostoa. Avainnippu aukeaa.
            </>
          }
        image2Src={pic2}
        image2Classes='p-6'
        description2={
          <>
            <strong>b.</strong> Avainnippu kysyy Mac-käyttäjänimeäsi ja salasanaa. <strong>Syötä</strong> ne ja paina OK.
          </>
        }
        image3Src={pic3}
        image3Classes='p-6'
        description3={
            <>
            <strong>c.</strong> Ruutu kysyy kohteen (avaimen) salasanaa. Salasana on <strong>peitenimesi</strong>. <small>Esimerkissä salasana on <em>PROGRAMMFEHLERMAEHER4.</em></small>
            </>
          }
      />
      <UnfoldableCard
        title="3. Aseta avain"
        styling="bg-backgroundLight"
        description1={
            <>
              <strong>a.</strong> <strong>Valitse</strong> avainnipussa vasemmalta 1. <em>Järjestelmä</em> ja yläpalkista 2. <em>Avaimet</em>. 
            </>
          }
        image2Src={pic4}
        image2Classes='p-6'
        description2={
          <>
            <strong>b.</strong> Kaksoisnapauta avaintasi <em>Peitenimesi.pfx</em>. Valitse <strong>Pääsynhallinta</strong>. Anna Mac-käyttäjätunnuksesi ja salasanasi.
          </>
        }
        image3Src={pic5}
        image3Classes='p-6'
        description3={
            <>
            <strong>c.</strong> Valitse asetus <strong>Salli kaikkien käyttää...</strong>, ja tallenna muutokset. Kysyttäessä anna Mac-käyttäjätunnuksesi ja salasanasi.
            </>
          }
          image4Src={pic6}
          image4Classes='p-6'
          description4={
              <>
              Avain on nyt asetettu! Paina <strong>Siirry palveluun</strong>-näppäintä.
              </>
            }
      />
    </main>
    );
  }