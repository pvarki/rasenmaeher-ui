import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "../Button";
import { Trans, useTranslation } from "react-i18next";

interface InfoModalProps {
  triggerClassName: string;
}

export function PrivacyPolicyModal({ triggerClassName }: InfoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={triggerClassName} onClick={openModal}>
          {t("privacyPolicy.triggerText")}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-background rounded-md max-w-md mx-auto p-8">
            <Dialog.Title className="text-lg text-white font-bold mb-4">
              {t("privacyPolicy.title")}
            </Dialog.Title>
            <Dialog.Description className="mb-4 text-white">
              <Trans
                i18nKey="privacyPolicy.description"
                ns="dynamic"
                components={{ strong: <strong />, li: <li />, br: <br /> }}
              />
            </Dialog.Description>
            <div className="flex justify-end">
              <Button onClick={closeModal}>
                {t("privacyPolicy.okButton")}
              </Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
