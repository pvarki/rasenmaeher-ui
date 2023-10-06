import React, { useMemo } from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { useEnrollmentList } from '../hook/api/useEnrollmentList';
import { useEnrolledUsers } from '../hook/api/useEnrolledUsers';
import { useUsers } from '../hook/api/useUsers';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';

export function UserManagementView() {
  const navigate = useNavigate()

  const {data: userList} = useUsers()

  const adminList = useMemo(() => userList?.filter(user => user.roles.includes('admin')) ?? [], [userList])
  const userListWithoutAdmins = useMemo(() => userList?.filter(user => !user.roles.includes('admin')) ?? [], [userList])

  return (
    <main className="px-3 flex flex-col gap-3 items-center justify-start h-full">
      <h1 className="text-white">UserManagementView</h1>
      <Button variant={{width: 'full'}} onClick={() => navigate('/app/user-management/code-list')}>Lisää käyttäjiä</Button>
      <UserListAccordian />
    </main>
  )
}



function UserListAccordian() {

  const {data: userList} = useUsers()

  const adminList = useMemo(() => userList?.filter(user => user.roles.includes('admin')) ?? [], [userList])
  const basicUserList = useMemo(() => userList?.filter(user => !user.roles.includes('admin')) ?? [], [userList])



  return (
  <Accordion.Root
    className="w-full flex flex-col gap-3"
    type="single"
    defaultValue="users"
    collapsible
  >

    <Accordion.Item value="admins" className="w-full bg-backgroundLight rounded-lg px-5">
      <Accordion.Header className="flex w-full">
      <Accordion.Trigger className='text-white w-full items-center outline-none group justify-between py-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex'>
        Admin
        <ChevronDownIcon
          className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      >
        {adminList.map(user => (
          <div className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center">
            {user.callsign}
            <a href={`/app/users/${user.callsign}`} className='hover:bg-[#4B4B4B] flex justify-center items-center w-8 h-8 rounded-full'>
              <ChevronRightIcon
                className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                aria-hidden
                />
            </a>
          </div>
        ))}
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="users" className="w-full bg-backgroundLight rounded-lg px-5">
      <Accordion.Header className="flex w-full">
      <Accordion.Trigger className='text-white w-full items-center outline-none group justify-between py-3 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden flex'>
        Users
        <ChevronDownIcon
          className="text-white ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content
        className="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]"
      >
        {basicUserList.map(user => (
          <div className="text-white py-3 px-3 border-t-2 border-[#4B4B4B] flex justify-between items-center">
            {user.callsign}
            <a href={`/app/users/${user.callsign}`} className='hover:bg-[#4B4B4B] flex justify-center items-center w-8 h-8 rounded-full'>
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
  )
}

const AccordionDemo = () => (
  <Accordion.Root
    className="bg-mauve6 w-[300px] rounded-md shadow-[0_2px_10px] shadow-black/5"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled?</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-violet11 shadow-mauve6 hover:bg-mauve2 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Accordion.Content>
));

