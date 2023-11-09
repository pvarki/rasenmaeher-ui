export function Footer() {
  return (
    <div className="font-heading text-uppercase text-center text-sm text-gray-500 pt-5 mt-10 mx-auto max-w-screen-xl">
      <hr className="mx-auto" />

      <div className="py-5">RASENMAEHER v0.1.0</div>

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
