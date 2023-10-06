import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import QRCode from 'react-qr-code';
import { QrScanner } from '@yudiel/react-qr-scanner';
import { Button } from '../components/Button';

export function UserInviteView() {

  return (
    <main className="px-3 flex flex-col gap-3 items-center justify-start">
      <h1 className="text-white">UserManagementView</h1>
      <Button variant={{width: 'full'}}>Näytä QR-Koodi</Button>
      <Button variant={{width: 'full'}}>Skannaa Koodi</Button>
      <input></input>
      <span className='text-white'>pena</span>
      <span className='text-white'>pena</span>
      <span className='text-white'>pena</span>
      <span className='text-white'>pena</span>
      <span className='text-white'>pena</span>
      <span className='text-white'>pena</span>
      {/* <TabsDemo /> */}
    </main>
  )
}

const TabsDemo = () => (
  <Tabs.Root
    className="flex flex-col w-full"
    defaultValue="qr"
  >
    <Tabs.List className="shrink-0 flex bg-backgroundLight p-1 gap-2 rounded-lg">
      <Tabs.Trigger
        className='px-3 py-2 rounded-lg flex-1 flex justify-center items-center text-white data-[state=active]:bg-primary data-[state=active]:text-white'
        value="qr"
      >
        QR-Koodi
      </Tabs.Trigger>
      <Tabs.Trigger
        className='px-3 py-2 rounded-lg flex-1 flex justify-center items-center text-white data-[state=active]:bg-primary data-[state=active]:text-white'
        value="camera"
      >
        Kamera
      </Tabs.Trigger>
    </Tabs.List>
    <QrTabContent />
    <CameraTabContent />
  </Tabs.Root>
);


function QrTabContent() {
  return (
  <Tabs.Content
    value="qr"
  > 
  <div className="flex flex-col items-center gap-5 p-5">

    <QRCode value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" />
    <Button variant={{width: 'full'}}>Generoi uusi koodi</Button>
    <h2 className='text-white font-bold'>Käyttäjien lisääminen</h2>
    <span className='text-white text-center'>
      Näytä taistelijallesi QR-koodia<br/>
      Taistelija pääsee kirjautumissivulle<br/>
      Hyväksy taistelijasi kirjautuminen<br/>
    </span>
  </div>
  </Tabs.Content>
  )
}

function CameraTabContent() {
  return (
  <Tabs.Content
    value="camera"
  >
    <div className="flex flex-col items-center gap-5 p-5">
      <QrScanner
        onDecode={(result) => console.log(result)}
        onError={(error) => console.log(error?.message)}
      />
      <button className='text-white'>Generoi uusi koodi</button>
      <h2 className='text-white font-bold'>Käyttäjien lisääminen</h2>
      <span className='text-white text-center'>
        Näytä taistelijallesi QR-koodia<br/>
        Taistelija pääsee kirjautumissivulle<br/>
        Hyväksy taistelijasi kirjautuminen<br/>
      </span>
    </div>
  </Tabs.Content>
  )
}