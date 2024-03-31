import { Cross2Icon } from "@radix-ui/react-icons";
import jellona from "../assets/icons/jellona.png";
import { useUserType } from '../hook/auth/useUserType';
import { useTranslation, Trans } from "react-i18next";
import { Link } from 'react-router-dom';

export function Sidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
  const { userType } = useUserType();
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black opacity-30 z-50"
        onClick={onClose}
      ></div>{" "}
      {/* This is the backdrop */}
      <div className="fixed top-0 left-0 h-full w-4/5 max-w-md bg-zinc-900 z-50 p-4 text-white">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <img src={jellona} alt="Jellona Logo" className="w-9 h-11 mr-4" />
            <h1 className="text-xl font-bold">Deploy App</h1>
          </div>
          <button
            className="p-2 rounded-full flex items-center justify-center"
            onClick={onClose}
          >
            <Cross2Icon />
          </button>
        </div>
        <div className="p-4 space-y-4">
           {/* Conditional rendering based on userType */}
           {userType === 'admin' && (
            <div className="cursor-pointer hover:bg-zinc-800 p-2 rounded">
              <Link to="/app/admin/manageusers" className="cursor-pointer hover:bg-zinc-800 p-2 rounded block text-white">
              <Trans i18nKey="adminHomeView.manageUsersTitle" components={{ strong: <strong />, br: <br /> }} />
            </Link>
            </div>
          )}
          <Link to="/app/services/tak/quickstart" className="cursor-pointer hover:bg-zinc-800 p-2 rounded block text-white">
            <Trans i18nKey="sidebar.guideButton.quickStart" /> {/* Assuming you have the translation key */}
          </Link>
          <Link to="/app/services/tak/usage" className="cursor-pointer hover:bg-zinc-800 p-2 rounded block text-white">
            <Trans i18nKey="sidebar.guideButton.usage" /> {/* Assuming you have the translation key */}
          </Link>
        <div className="absolute bottom-4 left-4 right-4">
          <button className="bg-red-900 w-full p-2 rounded">
            <Trans i18nKey="close" /> {/* Assuming you have the translation key */}
          </button>
        </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <button className="bg-red-900 w-full p-2 rounded">
            {t("close")}
          </button>
        </div>
      </div>
    </>
  );
}
