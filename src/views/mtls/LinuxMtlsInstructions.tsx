import { UnfoldableCard } from "../../components/UnfoldableCard2";

export function LinuxInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title="1. HUOM! Linux-ohjeita ei vielä ole."
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <>
                Linux-ohjeita ei vielä ole. <br />
                <br />
                Ohessa yleisohje.
                <br />
                Yleisesti ottaen mTLS-avaimen asetus menee näin:
                <ul>
                  <li>1. Lataa avain painamalla 'Lataa avain'-näppäintä.</li>
                  <li>2. Avaa avain kaksoisnapauttamalla sitä.</li>
                  <li>
                    3. Jos salasanaa kysytään, on se aina{" "}
                    <strong>peitenimesi</strong>, esim. KARHU10.
                  </li>
                  <li>
                    4. Jos keychainia/avainnippua kysytään, on se käyttäjän tai
                    järjestelmän keychain.
                  </li>
                  <li>
                    5. Jos luottamusta avaimeen kysytään, valitaan{" "}
                    <strong>"Luota aina"</strong>-tyyppinen asetus.
                  </li>
                  <li>
                    6. Jos kysytään, mitkä sovellukset saavat käyttää avainta,
                    valitaan <strong>Kaikki.</strong>
                  </li>
                  <li>
                    7. Tämän jälkeen avain käytössä. Paina Siirry
                    palveluun-näppäintä.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
      />
    </main>
  );
}
