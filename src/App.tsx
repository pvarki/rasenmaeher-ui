import Router from "./Router";
import { AlertDialogRoot } from "./components/AlertDialogService/AlertDialogRoot";
import { UserTypeFetcher } from "./hook/auth/userTypeFetcher";

function App() {
  return (
    <>
      <UserTypeFetcher>
        <Router />
        <AlertDialogRoot />
      </UserTypeFetcher>
    </>
  );
}

export default App;
