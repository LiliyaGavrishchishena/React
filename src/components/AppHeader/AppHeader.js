import React from 'react';
// components
import AppNav from './AppNav';
import Logo from './Logo';
import UserMenu from '../../modules/User/UserMenu';
import CartLinkContainer from '../../modules/CartLink/CartLinkContainer';
import navItems from '../../configs/main-nav';
import appLogo from './assets/logo.png';
import avatar from '../../modules/User/assets/avatar.png';
import styles from './AppHeader.module.css';
import Authentication from '../../modules/Authentication/Authentication';

// styles

const AppHeader = () => (
  <header className={styles.header}>
    <Logo className={styles.logo} image={appLogo} />
    <AppNav className={styles.nav} items={navItems} />
    <CartLinkContainer />
    <Authentication />
    <div className={styles.usermenu}>
      <UserMenu avatar={avatar} name="Liliya" />
    </div>
  </header>
);

export default AppHeader;
