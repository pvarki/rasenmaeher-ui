import { Trans } from "react-i18next";
import { UnfoldableCard } from "../../components/UnfoldableCard2";
import pic1 from "../../assets/mtls/mtls-windows-1.png";
import pic2 from "../../assets/mtls/mtls-windows-2.png";
import pic3 from "../../assets/mtls/mtls-windows-3.png";
import pic4 from "../../assets/mtls/mtls-windows-4.png";
import pic5 from "../../assets/mtls/mtls-windows-5.png";
import pic6 from "../../assets/mtls/mtls-windows-6.png";
import pic7 from "../../assets/mtls/mtls-windows-7.png";
import pic8 from "../../assets/mtls/mtls-windows-8.png";

export function WindowsInstructions() {
  return (
    <main className="flex flex-col w-full gap-3">
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step1.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step1.description"
                components={{ strong: <strong />, br: <br /> }}
              />
            ),
            imageSrc: pic1,
            imageClasses: "m-3 w-[300px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step2.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2a.description"
                components={{ em: <em />, strong: <strong /> }}
              />
            ),
            imageSrc: pic2,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2b.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic3,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2c.description"
                components={{ em: <em />, strong: <strong />, br: <br /> }}
              />
            ),
            imageSrc: pic4,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2d.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic5,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step2e.description"
                components={{ strong: <strong /> }}
              />
            ),
            imageSrc: pic6,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans i18nKey="windows-instructions.step2f.description" />
            ),
            imageSrc: pic7,
            imageClasses: "m-3 w-[500px]",
          },
        ]}
      />
      <UnfoldableCard
        title={<Trans i18nKey="windows-instructions.step3.title" />}
        styling="bg-backgroundLight"
        steps={[
          {
            description: (
              <Trans
                i18nKey="windows-instructions.step3a.description"
                components={{ em: <em />, strong: <strong /> }}
              />
            ),
            imageSrc: pic8,
            imageClasses: "m-3 w-[500px]",
          },
          {
            description: (
              <Trans i18nKey="windows-instructions.step3b.description" />
            ),
          },
        ]}
      />
    </main>
  );
}
