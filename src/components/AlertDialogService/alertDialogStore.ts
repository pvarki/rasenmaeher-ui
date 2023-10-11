import { create } from "zustand";
import { ButtonColors } from "../Button";

export interface AlertDialogProps {
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel: string;
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
