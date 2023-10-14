import parser from 'html-react-parser';

export function Footer() {
  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="py-5">
        {parser("RASENMAEHER v0.1.0")}
        
      </div>

      <hr className="mx-auto w-56" />

      <div className="py-5 text-xs">
        {parser("Proudly served by PVATK")}
        <br />
        {parser("&copy; Puolustusvoimat")}
        <br />
        {parser("Yhteys: <p class='underline'>helpdesk@pvarki.fi</p>")}
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
