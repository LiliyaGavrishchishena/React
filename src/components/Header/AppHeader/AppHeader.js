import React from 'react';
import Logo from '../Logo/Logo';
import AppNav from '../AppNav/AppNav';
import UserMenu from '../UserMenu/UserMenu';
import logo from '../logo.png';
import avatar from '../avatar.jpg';
import styles from './AppHeader.module.css';

const navItems = ['Menu', 'About', 'Contacts'];

const AppHeader = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <Logo image={logo} width={100} height={100} />
    </div>

    <div className="app_nav">
      <AppNav items={navItems} />
    </div>

    <div className={styles.usermenu}>
      <UserMenu avatar={avatar} name="Jordan Walke" />
    </div>
  </header>
);

export default AppHeader;
