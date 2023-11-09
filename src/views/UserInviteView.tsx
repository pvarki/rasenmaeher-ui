import { Button } from "../components/Button";
import { Layout } from "../components/Layout";

export function UserInviteView() {
  return (
    <Layout showNavbar={false} showFooter={true}>
      <main className="px-3 flex flex-col gap-3 items-center justify-start">
        <h1 className="text-white">UserManagementView</h1>
        <Button variant={{ width: "full" }}>Näytä QR-Koodi</Button>
        <Button variant={{ width: "full" }}>Skannaa Koodi</Button>
        <input></input>
        <span className="text-white">pena</span>
        <span className="text-white">pena</span>
        <span className="text-white">pena</span>
        <span className="text-white">pena</span>
        <span className="text-white">pena</span>
        <span className="text-white">pena</span>
        {/* <TabsDemo /> */}
      </main>
    </Layout>
  );
}
