import React, { Component, createRef } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Avatar from './Avatar/Avatar';
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;

    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );
    const { isDropDownOpen } = this.state;

    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({
      isDropDownOpen: true,
    });
  };

  closeDropdown = () => {
    this.setState({
      isDropDownOpen: false,
    });
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;

    return (
      <div
        className={styles.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className={styles.name}>{name} </span>
        {isDropDownOpen && <Dropdown />}
      </div>
    );
  }
}
