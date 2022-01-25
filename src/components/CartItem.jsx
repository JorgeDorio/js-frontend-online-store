import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class CartItem extends Component {
  render() {
    const {
    
    } = this.props;

    return (
      <ul>
          <li data-testid="shopping-cart-product-name">{name}</li>
          <li data-testid="shopping-cart-product-quantity"></li>
      </ul>
    );
  }
}

CartItem.propTypes = {
  aaaa: PropTypes.number.isRequired,
};

export default CartItem;
