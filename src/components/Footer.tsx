import { InfoModal } from "./InfoModal";
import useHealthCheck from "../hook/helpers/useHealthcheck";

export function Footer() {
  const isMtls = window.location.origin.includes("mtls.");
  const { version } = useHealthCheck();
  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="pt-4 py-3">RASENMAEHER {version || "Loading..."}</div>
      {isMtls && (
        <div className="py-1 pb-3 text-xs">
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
        &copy; PVATK. All rights reserved.
        <br />
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSehHTASMmqszEMOVOwMvjUNOj-lcEGskk58sUjsmurJDlvFZw/viewform"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kerro palautetta tai ideoita lomakkeella!
        </a>
      </div>

      <hr className="mx-auto w-56" />
    </div>
  );
}
