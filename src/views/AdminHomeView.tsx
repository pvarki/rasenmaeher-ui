

import resursoiSrc from '../assets/resursoi.png'

export function AdminHomeView() {
  return (
    <div className="flex flex-col gap-3">
      <Card title="Palvelut" />
      <Card title="Käyttäjähallinta" image={resursoiSrc}/>
    </div>
  )
}


function Card({title, image}: {title: string, image?: string}) {
  return (
    <a href="/app/user-management" className="relative bg-backgroundLight rounded-lg w-full h-36 overflow-hidden">
      {image && <img src={image} className="absolute top-0 left-0 w-full h-full object-contain p-3" />}
      <div className="absolute right-0 bottom-0 bg-primary p-2 rounded-tl-lg">
        <span className="text-white">{title}</span>
      </div>
    </a>
  )
}