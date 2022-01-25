import React from 'react';

class Cart extends React.Component {
  render() {
    const { renderingItemCart } = this.props;

    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message" className="">
          Seu carrinho está vazio
        </h1>
        <ul>
          {renderingItemCart.map((item) => (
            <div key={ item } data-testid="product-add-to-cart">
              <li className="" data-testid="shopping-cart-product-name">
                {item}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

// ATENÇAO > O CART TEM QUE EXIBIR UMA NOVA PAGINA. E NAO DO LADO DIREITO.

export default Cart;
