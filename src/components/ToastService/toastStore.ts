import { create } from "zustand"
import { ButtonColors } from "../Button"

export interface ToastStoreProps {
  title: string
  description: string
}

export interface ToastStore {
  open: boolean
  props?: ToastStoreProps

  openToast: (props: ToastStoreProps) => void
  closeDialog: () => void
}

export const useToastStore = create<ToastStore>((set) => ({
  open: false,
  props: undefined,

  openDialog: (props: ToastStoreProps) => set({ open: true, props }),
  closeDialog: () => set({ open: false, props: undefined })
}))

export const useToast = () => {
  const { open, openDialog, closeDialog } = useToastStore()

  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return {
    open,
    openDialog,
    closeDialog,
  }
}