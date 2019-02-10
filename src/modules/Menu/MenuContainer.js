import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { connect } from 'react-redux';

import { menuSelectors, menuOperations } from '../../redux/menu';
import { cartActions } from '../../redux/cart';
import {
  categoriesSelectors,
  categoriesOperations,
} from '../../redux/categories';

import CategorySelector from './CategorySelector';
import MenuView from './MenuView';

import styles from './MenuContainer.module.css';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class MenuContainer extends Component {
  state = {};

  componentDidMount() {
    const { fetchMenuItems, fetchMenuCategories } = this.props;
    const category = getCategoryFromProps(this.props);

    fetchMenuCategories();
    fetchMenuItems(category);
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);
    const { fetchMenuItems } = this.props;

    if (prevCategory !== nextCategory) {
      fetchMenuItems(nextCategory);
    }
  }

  resetCategory = () => {
    const { history } = this.props;

    history.push({
      pathname: '/menu',
      serch: '',
    });
  };

  handleClearFilter = event => {
    event.preventDefault();
    const { history, location, fetchMenuItems } = this.props;
    fetchMenuItems();
    return history.replace({
      pathname: location.pathname,
      serch: '',
    });
  };

  handleCategoryChange = category => {
    const { history, location, fetchMenuItems } = this.props;
    fetchMenuItems(category);
    history.push({
      pathname: location.match,
      search: `category=${category}`,
    });
  };

  render() {
    const {
      match,
      location,
      menu,
      categories,
      addToCart,
      resetCategory,
    } = this.props;
    const category = getCategoryFromProps(this.props);
    return (
      <div>
        <CategorySelector
          categories={categories}
          category={category}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleClearFilter}
        />
        {category && (
          <>
            <button
              className={styles.button}
              type="button"
              onClick={this.handleClearFilter}
            >
              Clear
            </button>
            <p>Your choose now is: {category}</p>
          </>
        )}
        <MenuView
          items={menu}
          match={match}
          location={location}
          addToCart={addToCart}
          resetCategory={resetCategory}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  menu: menuSelectors.getAllMenuItems(state),
  categories: categoriesSelectors.getAllCategories(state),
  isModalOpen: false,
});

const mapDispatchToProps = {
  fetchMenuItems: menuOperations.fetchMenuItems,
  fetchMenuCategories: categoriesOperations.fetchCategoriesItems,
  addToCart: cartActions.addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(MenuContainer));
