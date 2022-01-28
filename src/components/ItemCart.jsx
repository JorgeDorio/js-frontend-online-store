import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  render() {
    const { id, name, quantidade, valor, handlePlusClick, handleSubClick } = this.props;
    return (
      <div>
        <ul>
          <div key={ id }>
            <div data-testid="shopping-cart-product-quantity">
              <h3>{quantidade}</h3>
              <button
                type="button"
                onClick={ () => { handlePlusClick(id); } }
                id="btnPlus"
                data-testid="product-increase-quantity"
              >
                (+)
              </button>
              <button
                type="button"
                onClick={ () => { handleSubClick(id); } }
                id="btnMinus"
                data-testid="product-decrease-quantity"
              >
                (-)
              </button>
            </div>
            <h3 data-testid="shopping-cart-product-name">{`${name}.`}</h3>
            <h3>{`R$${valor}`}</h3>
            {/* preciso de uma func embaixo para onclick */}
            <hr />
          </div>
        </ul>
      </div>
    );
  }
}

ItemCart.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  quantidade: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  handlePlusClick: PropTypes.func.isRequired,
  handleSubClick: PropTypes.func.isRequired,
};
