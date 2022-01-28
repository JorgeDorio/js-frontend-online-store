import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.compareElementsArray = this.compareElementsArray.bind(this);
  }

  compareElementsArray() {
    const { match } = this.props;
    const { id } = match.params;
    const { valueArray, putItemInCart } = this.props;
    const arrayOfElements = Object.entries(valueArray);
    // comparar os títulos do array gerados no Content com o título do array do Click
    const result = arrayOfElements[0][1].find((el) => (
      (`:${el.props.titulo}` === id) ? el : ''
    ));
    putItemInCart(result.props.id, result.props.titulo, result.props.price);

    // e colocar dentro do cart
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;
    return (
      <div data-testid="product-detail-add-to-cart">
        Product Details
        <div data-testid="shopping-cart-product-name">
          <h3 data-testid="product-detail-name">{id}</h3>
        </div>
        <div data-testid="shopping-cart-product-quantity">1</div>
        <button
          data-testid="shopping-cart-button"
          type="button"
          onClick={ this.compareElementsArray }
        >
          Add Cart
        </button>
      </div>
    );
  }
}

// ProductDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//   }),
// };

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  valueArray: PropTypes.string.isRequired,
  putItemInCart: PropTypes.func.isRequired,
};
