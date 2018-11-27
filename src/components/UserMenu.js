import React, { Component } from 'react';
import Dropdown from './Dropdown';
import Avatar from './Avatar';
import avatar from '../avatar.jpg';

export default class UserMenu extends Component {
  state = {
    isDropDownOpen: false,
  };

  toggleDropdown = () => {
    this.setState(state => ({
      isDropDownOpen: !state.isDropDownOpen,
    }));
  };

  render() {
    const { isDropDownOpen } = this.state;

    return (
      <div>
        <Avatar image={avatar} />
        <span>Джордан Уокер </span>
        {isDropDownOpen && Dropdown}
      </div>
    );
  }
}
