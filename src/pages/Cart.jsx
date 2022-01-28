import React from 'react';
import PropTypes from 'prop-types';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  render() {
    const { renderingItemCart, handlePlusClick, handleSubClick } = this.props;
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message" className="">
          Seu carrinho está vazio
        </h1>
        {Object.entries(renderingItemCart).map((item) => (
          <ItemCart
            key={ item[1].id }
            id={ item[1].id }
            name={ item[1].name }
            quantidade={ item[1].quantidade }
            valor={ item[1].valor }
            handlePlusClick={ handlePlusClick }
            handleSubClick={ handleSubClick }

          />
        ))}
      </div>
    );
  }
}

// ATENÇAO > O CART TEM QUE EXIBIR UMA NOVA PAGINA. E NAO DO LADO DIREITO.
Cart.propTypes = {
  renderingItemCart: PropTypes.objectOf({
    id: PropTypes.string,
  }).isRequired,
  handlePlusClick: PropTypes.func.isRequired,
  handleSubClick: PropTypes.func.isRequired,
};

export default Cart;
