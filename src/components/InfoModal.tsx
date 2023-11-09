import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { Button } from "./Button";

interface InfoModalProps {
  triggerClassName: string;
}

export function InfoModal({ triggerClassName }: InfoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>
        <button className={triggerClassName} onClick={openModal}>
          Mikä mTLS?
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
        <Dialog.Content className="fixed inset-0 flex items-center justify-center p-4">
          <div className="bg-background rounded-md max-w-md mx-auto p-8">
            <Dialog.Title className="text-lg text-white font-bold mb-4">
              Mikä mTLS?
            </Dialog.Title>
            <Dialog.Description className="mb-4 text-white">
              Kun käytät laitteellesi asennettua mTLS-avainta yhdistääksesi
              palveluumme, voimme varmistua siitä, että yhteys tulee{" "}
              <strong>juuri sinulta.</strong> Kukaan muu ei voi esiintyä sinuna.
              Samoin sinä varmistut siitä, että vastapäässä olemme me. <br />
              <br />
              Kaikki Rasenmaeherista käyttöön ottamasi palvelut salaavat
              liikenteensä mTLS-avaimellasi.
            </Dialog.Description>
            <div className="flex justify-end">
              <Button onClick={closeModal}>OK</Button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
