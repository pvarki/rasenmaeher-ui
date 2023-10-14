import { useMemo } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useUsers } from "../hook/api/useUsers";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";

export function UserManagementView() {
  const navigate = useNavigate();

  // const { data: userList } = useUsers();

  // const adminList = useMemo(
  //   () => userList?.filter((user) => user.roles.includes("admin")) ?? [],
  //   [userList],
  // );
  // const userListWithoutAdmins = useMemo(
  //   () => userList?.filter((user) => !user.roles.includes("admin")) ?? [],
  //   [userList],
  // );

  return (
    <Layout showNavbar={true} navbarTitle="Käyttäjienhallinta" backUrl="/app">
      <main className="px-3 flex flex-col gap-3 items-center justify-start h-full">
        <h1 className="text-white">UserManagementView</h1>
        <Button
          variant={{ width: "full" }}
          onClick={() => navigate("/app/user-management/code-list")}
        >
          Lisää käyttäjiä
        </Button>
        <UserListAccordian />
      </main>
    </Layout>
  );
}

function UserListAccordian() {
  const { data: userList } = useUsers();

  const adminList = useMemo(
    () => userList?.filter((user) => user.roles.includes("admin")) ?? [],
    [userList],
  );
  const basicUserList = useMemo(
    () => userList?.filter((user) => !user.roles.includes("admin")) ?? [],
    [userList],
  );

  return (
    <Accordion.Root
      className="w-full flex flex-col gap-3"
      type="single"
      defaultValue="users"
      collapsible
    >
      <Accordion.Item
        value="admins"
        className="w-full bg-backgroundLight rounded-lg px-5"
      >
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex">
            Admin
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {adminList.map((user) => (
            <div className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center">
              {user.callsign}
              <a
                href={`/app/users/${user.callsign}`}
                className="hover:bg-[#4B4B4B] flex justify-center items-center w-8 h-8 rounded-full"
              >
                <ChevronRightIcon
                  className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </a>
            </div>
          ))}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item
        value="users"
        className="w-full bg-backgroundLight rounded-lg px-5"
      >
        <Accordion.Header className="flex w-full">
          <Accordion.Trigger className="text-white w-full items-center outline-none group justify-between py-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex">
            Users
            <ChevronDownIcon
              className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
              aria-hidden
            />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]">
          {basicUserList.map((user) => (
            <div className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center">
              {user.callsign}
              <a
                href={`/app/users/${user.callsign}`}
                className="hover:bg-[#4B4B4B] flex justify-center items-center w-8 h-8 rounded-full"
              >
                <ChevronRightIcon
                  className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </a>
            </div>
          ))}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
