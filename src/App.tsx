import Router from "./Router";
import { AlertDialogRoot } from "./components/AlertDialogService/AlertDialogRoot";
import { UserTypeFetcher } from "./hook/auth/userTypeFetcher";
import { LoadingProvider } from "./components/Loading/LoadingProvider";
import LoadingComponent from "./components/Loading/LoadingComponent";
import { useUserType } from "./hook/auth/useUserType";
import { useTranslation } from "react-i18next";

function App() {
  return (
    <LoadingProvider>
      <UserTypeFetcher>
        <Content />
      </UserTypeFetcher>
    </LoadingProvider>
  );
}

const Content = () => {
  const { isLoading } = useUserType();
  const { t } = useTranslation();

  if (isLoading) {
    return <LoadingComponent text={t("common.loadingText")} />;
  }

  return (
    <div className="relative">
      <div className="opacity-100">
        <Router />
        <AlertDialogRoot />
      </div>
    </div>
  );
};
export default App;
