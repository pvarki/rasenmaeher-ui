import { ReactNode } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Outlet } from 'react-router-dom';

interface LayoutProps {
  showNavbar?: boolean;
  showHeader?: boolean;
  navbarTitle?: string;
  backUrl?: string;
  children?: React.ReactNode;
}

export function Layout({
  showNavbar = false,
  showHeader = true,
  navbarTitle,
  backUrl,
  children,
}: LayoutProps) {
  return (
    <div className="layout">
      {showNavbar && <Navbar title={navbarTitle} backUrl={backUrl} />}
      {showHeader && !showNavbar && <Header />}
      <div className="content mt-5"> 
        {children || <Outlet />}
      </div>
    </div>
  );
}
