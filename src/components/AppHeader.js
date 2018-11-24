import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';

const nav = ['Menu', 'About', 'Contacts'];

const Header = () => (
  <header className="header">
    <Logo />
    <AppNav items={nav} />
    <UserMenu name={'Bob Ross'}/>
  </header>
);

export default Header;
