import { create } from "zustand";
import { ButtonColors } from "../Button";
import { ReactNode } from "react";

export interface AlertDialogProps {
  title: React.ReactNode;
  description: ReactNode | string;
  confirmLabel: React.ReactNode;
  cancelLabel?: React.ReactNode;
  onConfirm: () => void;
  onCancel?: () => void;
  confirmColor?: ButtonColors;
}

export interface AlertDialogStore {
  open: boolean;
  props?: AlertDialogProps;

  openDialog: (props: AlertDialogProps) => void;
  closeDialog: () => void;
}

export const useAlertDialogStore = create<AlertDialogStore>((set) => ({
  open: false,
  props: undefined,

  openDialog: (props: AlertDialogProps) => set({ open: true, props }),
  closeDialog: () => set({ open: false, props: undefined }),
}));

export const useAlertDialog = () => {
  const { open, openDialog, closeDialog } = useAlertDialogStore();

  return {
    open,
    openDialog,
    closeDialog,
  };
};
