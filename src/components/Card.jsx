import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class Card extends Component {
  render() {
    const {
      titulo,
      foto,
      price,
      quantity = 1,
      cartCallback,
    } = this.props;

    return (
      <div className="cardClass" data-testid="product">
        <h3>
          {titulo}
        </h3>
        <img
          src={ foto }
          alt="Alternative"
          data-testid=""
          width="150px"
        />
        <h4>
          {price}
        </h4>
        <button
          type="button"
          onClick={ () => { cartCallback(titulo, price, quantity); } }
        >
          Adicionar no Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  price: PropTypes.number.isRequired,
  foto: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
};

export default Card;
