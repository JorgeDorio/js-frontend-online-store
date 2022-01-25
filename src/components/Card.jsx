import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { id, titulo, foto, price, cartCallback } = this.props;

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
          onClick={ () => { cartCallback(id, titulo, price); } }
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
  cartCallback: PropTypes.func.isRequired,
};

export default Card;
