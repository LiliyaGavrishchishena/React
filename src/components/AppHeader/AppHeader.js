import React from 'react';
import { connect } from 'react-redux';
// components
import AppNav from './Nav/AppNav';
import Logo from './Logo';
import UserMenu from '../../modules/User/UserMenu';
import CartLinkContainer from '../../modules/CartLink/CartLinkContainer';
import navItems from '../../configs/main-nav';
import appLogo from '../../assets/logo.png';
import avatar from '../../modules/User/assets/avatar.png';
import styles from './AppHeader.module.css';
import Authentication from '../../modules/Authentication/Authentication';
import authSelectors from '../../redux/auth/authSelectors';
import authOperation from '../../redux/auth/authOperations';

const AppHeader = ({ isAuthenticated, user, exit }) => (
  <header className={styles.header}>
    <Logo className={styles.logo} image={appLogo} />
    <AppNav className={styles.nav} items={navItems} />
    <CartLinkContainer className={styles.cart} />
    <div className={styles.usermenu}>
      {isAuthenticated ? (
        <UserMenu signOut={exit} user={user} avatar={avatar} />
      ) : (
        <Authentication />
      )}
    </div>
  </header>
);

const mapStateToProps = state => ({
  user: authSelectors.getUser(state),
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

const mapDispatchToProps = {
  exit: authOperation.signOut,
};
const options = { pure: false };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  options,
)(AppHeader);
