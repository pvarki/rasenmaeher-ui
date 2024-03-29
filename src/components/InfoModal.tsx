import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Button } from "./Button";

interface InfoModalProps {
  triggerClassName: string;
}

export function InfoModal({ triggerClassName }: InfoModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={triggerClassName} onClick={openModal}>
          {t("what-is-mtls")}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-background rounded-md max-w-md mx-auto p-8">
            <Dialog.Title className="text-lg text-white font-bold mb-4">
              <Trans i18nKey="what-is-mtls-title" />
            </Dialog.Title>
            <Dialog.Description className="mb-4 text-white">
              <Trans
                i18nKey="mtls-description"
                components={{ strong: <strong />, br: <br /> }}
              />
            </Dialog.Description>
            <div className="flex justify-end">
              <Button onClick={closeModal}>{t("ok")}</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
