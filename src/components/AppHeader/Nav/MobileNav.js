import React, { Component } from 'react';

import Toolbar from './Toolbar';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop';

class MobileNav extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => ({ sideDrawerOpen: !prevState.sideDrawerOpen }));
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    const { sideDrawerOpen } = this.state;
    const { items = [] } = this.props;

    let backdrop;

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          items={items}
          show={sideDrawerOpen}
          onClose={this.drawerToggleClickHandler}
        />
        {backdrop}
      </div>
    );
  }
}

export default MobileNav;
