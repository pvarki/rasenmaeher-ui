import { InfoModal } from "./InfoModal";

export function Footer() {
  const isMtls = window.location.origin.includes("mtls.");
  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-3">RASENMAEHER v0.1.0</div>
      {isMtls && (
        <div className="py-1 text-xs">
          Tunnistautunut mTLS:llä -{" "}
          <InfoModal triggerClassName="text-m text-blue-500 underline cursor-pointer" />
        </div>
      )}

      <hr className="mx-auto w-56" />

      <div className="py-5 text-xs">
        Proudly served by{" "}
        <a
          href="https://github.com/pvarki"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          PVATK
        </a>
        <br />
        &copy; Puolustusvoimat
        <br />
        Yhteys:{" "}
        <a href="mailto:helpdesk@pvarki.fi" className="underline">
          helpdesk@pvarki.fi
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
