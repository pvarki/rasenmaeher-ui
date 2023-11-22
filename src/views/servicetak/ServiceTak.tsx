import tak from "../../assets/icons/taklogo.png";
import usage from "../../assets/icons/sota.png";
import phone from "../../assets/icons/byod2.png";
import { CardsContainer } from "../../components/CardsContainer";
import { FoldableCard } from "../../components/FoldableCard";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import { ServiceInfoCard } from "../../components/ServiceInfoCard";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ServiceTakUsageCard } from "./usage/helpers/ServiceTakUsageCard";
import { useFetchZipFile } from "../../hook//api/tak/useFetchZipFile";
import { useAlertDialog } from "../../components/AlertDialogService";

export function ServiceTak() {
  const navigate = useNavigate();
  const { openDialog } = useAlertDialog();
  const { mutate: fetchFile, isLoading } = useFetchZipFile({
    onSuccess: ({ blob, filename }) => {
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      openDialog({
        title: "Viestiperusteet ladattu.",
        description: (
          <div>
            {
              <>
                Viestiperustepaketti ladattu. Paketti tulee ladata sovellukseen.
                Seuraa käyttöönotto-ohjeita. <br /> <br />
                <em> Paketin nimi:</em>
                <br />"{filename}"
              </>
            }
            ,
          </div>
        ),
        confirmLabel: "Sulje",
        confirmColor: "primary",
        onConfirm: () => {
          // just close the dialog
        },
      });
    },
    onError: (error) => {
      const errorMessage =
        error.message ||
        "Viestiperustepaketin lataaminen epäonnistui. Yritä uudelleen myöhemmin.";
      openDialog({
        title: "Virhe",
        description: (
          <div>
            {
              <>
                Viestiperustepaketin lataaminen epäonnistui. Yritä uudelleen
                myöhemmin. <br /> <br />
                <em> Virheilmoitus sovellukselta:</em>
                <br />"{errorMessage}"
              </>
            }
            ,
          </div>
        ),
        confirmLabel: "Sulje",
        confirmColor: "primary",
        onConfirm: () => {
          // just close the dialog
        },
      });
    },
  });

  const handleDownloadClick = () => {
    fetchFile();
  };

  return (
    <div>
      <CardsContainer>
        <FoldableCard title="TAK" imageSrc={tak}>
          <div className="flex flex-col items-center justify-center p-5">
            <ServiceInfoCard title="Tilannekuvasovellus TAK" image={tak} />
            <UnfoldableCard
              title="Näin otat käyttöön"
              steps={[
                {
                  description: (
                    <>
                      <strong>Käyttöönotto-ohje</strong> opastaa palvelun
                      käyttöönoton laitteellesi.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      Ohje <strong>Käyttö joukossa</strong> opastaa, miten
                      käytät sovellusta perusmallin mukaisesti.
                    </>
                  ),
                },
                {
                  description: (
                    <>
                      <strong>Viestiperustepaketti</strong> sisältää ladattavat
                      henkilökohtaiset perusteesi.
                    </>
                  ),
                },
              ]}
            />

            <ServiceTakUsageCard />
            <div className="flex w-full items-center justify-center items-stretch px-0">
              <div className="flex-1 px-1">
                <Button
                  variant={{ width: "full" }}
                  onClick={() => navigate("/app/services/tak/quickstart")}
                  styling="m-1 px-2"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={phone} alt="keys" className="h-5 w-5 mr-2" />
                    Ohje: Käyttöönotto
                  </div>
                </Button>
              </div>
              <div className="p-1" />
              <div className="flex-1 px-1">
                <Button
                  variant={{ width: "full" }}
                  onClick={() => navigate("/app/services/tak/usage")}
                  styling="m-1 px-2"
                >
                  <div className="flex items-center justify-center w-full h-full">
                    <img src={usage} alt="keys" className="h-5 w-5 mr-2" />
                    Ohje: Käyttö joukossa
                  </div>
                </Button>
              </div>
              <div className="p-1" />
            </div>
            <Button
              variant={{ width: "full" }}
              onClick={handleDownloadClick}
              disabled={isLoading}
              styling="bg-success-700 m-2"
            >
              {isLoading ? "Ladataan..." : "Lataa viestiperustepaketti"}
            </Button>
          </div>
        </FoldableCard>
      </CardsContainer>
    </div>
  );
}
