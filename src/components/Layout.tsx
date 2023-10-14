import { Header } from './Header';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  showNavbar?: boolean;
  showHeader?: boolean;
  navbarTitle?: string;
  backUrl?: string;
  children?: React.ReactNode;
  heroImage?: string;
}

export function Layout({
  showNavbar = false,
  showHeader = true,
  navbarTitle,
  backUrl,
  children,
  heroImage,
}: LayoutProps) {

  return (
    <div className={`layout flex flex-col min-h-screen ${showNavbar ? 'pt-16' : 'pt-0'}`}>
      {showNavbar && <Navbar title={navbarTitle} backUrl={backUrl} />}
      {showHeader && !showNavbar && <Header />}

      <div className="relative">
        {heroImage && (
          <div 
            className="hero bg-cover bg-center"
            style={{ height: '30vh', backgroundImage: `url(${heroImage})` }}
          ></div>
        )}

        <div className="content absolute top-0 mt-[calc(30vh/1.5)] w-full">
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
}



