import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { PublicFooter } from "./PublicFooter";
import { Sidebar } from "./Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

interface LayoutProps {
  showNavbar?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  showPublicFooter?: boolean;
  showSidebar?: boolean;
  navbarTitle?: React.ReactNode;
  backUrl?: string;
  children?: React.ReactNode;
  heroImage?: string;
}

export function Layout({
  showNavbar = false,
  showHeader = true,
  showFooter = false,
  showPublicFooter = false,
  navbarTitle,
  backUrl,
  children,
  heroImage,
}: LayoutProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const marginTopValue = heroImage
    ? "mt-[calc(-50vh/3)] md:mt-[calc(-50vh/2)] lg:mt-[calc(-70vh/1.5)]"
    : "mt-4";

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className={`layout flex flex-col min-h-screen ${
        showNavbar ? "pt-16" : "pt-0"
      }`}
    >
      {showNavbar && <Navbar title={navbarTitle} backUrl={backUrl} />}
      {showHeader && !showNavbar && <Header />}

      {showNavbar && (
        <Navbar
          title={navbarTitle}
          backUrl={backUrl}
          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        />
      )}

      <div className="relative flex-grow">
        {heroImage && (
          <div
            className={`hero bg-cover bg-center w-full h-[30vh] md:h-[50vh] lg:h-[70vh]`}
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        )}

        <div className={`content ${marginTopValue}`}>
          {children || <Outlet />}
        </div>
      </div>

      {(showFooter && <Footer />) || (showPublicFooter && <PublicFooter />)}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}
