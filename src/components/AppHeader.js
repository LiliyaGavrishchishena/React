import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';
import logo from '../logo.png';

const navItems = ['Menu', 'About', 'Contacts'];

const AppHeader = () => (
  <header className="header">
    <div className="logo">
      <Logo image={logo} width={100} height={100} />
    </div>

    <div className="app_nav">
      <AppNav items={navItems} />
    </div>

    <div className="user_menu">
      <UserMenu name="Bob Ross" />
    </div>
  </header>
);

export default AppHeader;
