import { Trans } from "react-i18next"; // Make sure to import Trans
import { UnfoldableCard } from "../../components/UnfoldableCard";
import pic1 from "../../assets/mtls/mtls-mac-1.png";
import pic2 from "../../assets/mtls/mtls-mac-2.png";
import pic3 from "../../assets/mtls/mtls-mac-3.png";
import pic4 from "../../assets/mtls/mtls-mac-4.png";
import pic5 from "../../assets/mtls/mtls-mac-5.png";
import pic6 from "../../assets/mtls/mtls-mac-6.png";

export function MacInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title={<Trans i18nKey="mac-instructions.download-key.title" />}
        styling="bg-backgroundLight"
        description1={
          <Trans
            i18nKey="mac-instructions.download-key.description1"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image2Src={pic1}
        image2Classes="p-6"
      />
      <UnfoldableCard
        title={<Trans i18nKey="mac-instructions.open-key.title" />}
        styling="bg-backgroundLight"
        description1={
          <Trans
            i18nKey="mac-instructions.open-key.description1"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image2Src={pic2}
        image2Classes="p-6"
        description2={
          <Trans
            i18nKey="mac-instructions.open-key.description2"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image3Src={pic3}
        image3Classes="p-6"
        description3={
          <Trans
            i18nKey="mac-instructions.open-key.description3"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
      />
      <UnfoldableCard
        title={
          <Trans
            i18nKey="mac-instructions.set-key.title"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        styling="bg-backgroundLight"
        description1={
          <Trans
            i18nKey="mac-instructions.set-key.description1"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image2Src={pic4}
        image2Classes="p-6"
        description2={
          <Trans
            i18nKey="mac-instructions.set-key.description2"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image3Src={pic5}
        image3Classes="p-6"
        description3={
          <Trans
            i18nKey="mac-instructions.set-key.description3"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
        image4Src={pic6}
        image4Classes="p-6"
        description4={
          <Trans
            i18nKey="mac-instructions.set-key.description4"
            components={{
              strong: <strong />,
              em: <em />,
              small: <small />,
              br: <br />,
            }}
          />
        }
      />
    </main>
  );
}
