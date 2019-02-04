import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MenuItemView from './MenuItemView';
import * as API from '../../services/api';
import { cartActions } from '../../redux/cart';

class MenuCard extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(data =>
      this.setState({ ...data }),
    );
  }

  handleGoBack = () => {
    const {
      location: { state },
      history,
    } = this.props;
    const { category } = this.state;

    if (state) {
      return history.push(state.from);
    }

    return history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  render() {
    const {
      id,
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;
    const { addToCart } = this.props;

    return (
      <MenuItemView
        data={{
          id,
          name,
          description,
          image,
          price,
          category,
          ingredients,
        }}
        goBack={this.handleGoBack}
        addToCart={addToCart}
      />
    );
  }
}

const mapDispatchToProps = {
  addToCart: cartActions.addToCart,
};

export default connect(
  null,
  mapDispatchToProps,
)(withRouter(MenuCard));
