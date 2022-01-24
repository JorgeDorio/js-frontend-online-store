import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <h1 data-testid="shopping-cart-empty-message" className="sidebar">
        Seu carrinho está vazio
      </h1>);
  }
}

// ATENÇAO > O CART TEM QUE EXIBIR UMA NOVA PAGINA. E NAO DO LADO DIREITO.

export default Cart;
