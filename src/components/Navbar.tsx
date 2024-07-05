import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import logo from "../assets/set/mainlogo.png";
import useHealthcheck from "../hook/helpers/useHealthcheck";

interface NavbarProps {
  backUrl?: string;
  title?: ReactNode;
}

export function Navbar({ backUrl, title }: NavbarProps) {
  const { deployment } = useHealthcheck();
  const displayTitle = title || deployment || "Loading...";
  return (
    <div className="h-16 flex items-center justify-center w-full p-3 bg-backgroundLight fixed top-0 left-0 right-0 z-10">
      <img
        src={logo}
        alt="Logo"
        className="absolute left-3 w-9 h-11 object-cover"
      />
      <h1 className="text-white text-xl font-bold ml-3">{displayTitle}</h1>
      {backUrl && (
        <Link
          to={backUrl}
          className="text-white absolute right-3 flex justify-center items-center w-8 h-8 rounded-full hover:bg-background"
        >
          <ArrowLeftIcon width={24} height={24} />
        </Link>
      )}
    </div>
  );
}
