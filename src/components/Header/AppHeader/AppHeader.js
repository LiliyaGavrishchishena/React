import React from 'react';
// components
import Logo from '../Logo/Logo';
import AppNav from '../AppNav/AppNav';
import UserMenu from '../UserMenu/UserMenu';
import logo from '../logo.png';
import avatar from '../avatar.jpg';
// styles
import styles from './AppHeader.module.css';

const navItems = ['Menu', 'About', 'Contacts'];

const AppHeader = () => (
  <header className={styles.header}>
    <Logo image={logo} />

    <AppNav items={navItems} />

    <UserMenu avatar={avatar} name="Jordan Walke" />
  </header>
);

export default AppHeader;
