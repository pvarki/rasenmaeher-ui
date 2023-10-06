
import { ArrowLeftIcon } from "@radix-ui/react-icons";

interface NavbarProps {
  backUrl?: string;
  title?: string;
}

export function Navbar({ backUrl, title }: NavbarProps) {
  return (
    <div className="relative h-14 flex items-center justify-center w-full p-3 bg-backgroundLight rounded-lg">
      {backUrl && <a href={backUrl} className="text-white absolute flex justify-center items-center left-3 w-8 h-8 rounded-full hover:bg-background"><ArrowLeftIcon width={24} height={24} /></a>}
      {title && <h1 className="text-white text-xl font-bold ml-3">{title}</h1>}
    </div>
  )
}