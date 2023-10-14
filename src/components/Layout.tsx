import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
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

      <div className="relative flex-grow">
        {heroImage && (
          <div 
            className={`hero bg-cover bg-center w-full h-[30vh] md:h-[50vh] lg:h-[70vh]`}
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        )}

        <div className="content mt-[calc(-30vh/3)] md:mt-[calc(-50vh/2)] lg:mt-[calc(-70vh/1.5)]">
          {children || <Outlet />}
        </div>
      </div>

      <Footer />
    </div>
  );
}
