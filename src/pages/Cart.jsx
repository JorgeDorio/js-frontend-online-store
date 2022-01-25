import React from 'react';
import ItemCart from '../components/ItemCart';

class Cart extends React.Component {
  render() {
    const { renderingItemCart } = this.props;
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message" className="">
          Seu carrinho está vazio
        </h1>
        <ItemCart renderingItemCart={ renderingItemCart } />
      </div>
    );
  }
}

// ATENÇAO > O CART TEM QUE EXIBIR UMA NOVA PAGINA. E NAO DO LADO DIREITO.

export default Cart;
