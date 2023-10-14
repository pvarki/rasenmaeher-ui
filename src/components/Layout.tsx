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

      <div className="relative flex-grow">
        {heroImage && (
          <div 
            className={`hero bg-cover bg-center w-full h-[30vh] md:h-[50vh] lg:h-[90vh] relative`}
            style={{ backgroundImage: `url(${heroImage})` }}
          ></div>
        )}

        <div className={`content absolute w-full  left-1/2 transform -translate-x-1/2 top-0 mt-[calc(30vh/1.5)] md:mt-[calc(50vh/1.5)] lg:mt-[calc(75vh/4)]`}>
          {children || <Outlet />}
        </div>
      </div>
    </div>
  );
}


