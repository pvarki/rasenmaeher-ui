import Router from "./Router";
import { AlertDialogRoot } from "./components/AlertDialogService/AlertDialogRoot";
import { UserTypeFetcher } from "./hook/auth/userTypeFetcher";
import { LoadingProvider } from "./components/Loading/LoadingProvider";
import LoadingComponent from "./components/Loading/LoadingComponent";
import { useLoading } from "./components/Loading/useLoading";
import { useUserType } from "./hook/auth/useUserType";

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

  if (isLoading) {
    return <LoadingComponent />;
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
