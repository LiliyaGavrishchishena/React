import React, { Component } from 'react';
// components
import MenuGrid from '../MenuGrid/MenuGrid';
import * as API from '../../services/api';
// styles
import styles from './MenuPage.module.css';

export default class MenuPage extends Component {
  state = { menu: [] };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&h=480&w=640',
    };

    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  render() {
    const { menu } = this.state;
    return (
      <div>
        <button
          className={styles.btn_addMenu}
          type="button"
          onClick={this.handleAddMenuItem}
        >
          Add menu item
        </button>
        <MenuGrid
          items={menu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
