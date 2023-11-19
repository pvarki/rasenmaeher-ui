import Router from "./Router";
import { AlertDialogRoot } from "./components/AlertDialogService/AlertDialogRoot";
import { UserTypeFetcher } from "./hook/auth/userTypeFetcher";
import { LoadingProvider } from "./components/Loading/LoadingProvider";
import LoadingComponent from "./components/Loading/LoadingComponent";
import { useLoading } from "./components/Loading/useLoading";

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
  const { isLoading } = useLoading();

  return (
    <>
      {isLoading && <LoadingComponent />}
      <Router />
      <AlertDialogRoot />
    </>
  );
};

export default App;
