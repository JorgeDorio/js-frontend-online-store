import React, { Component } from 'react';

export default class ItemCart extends Component {
  render() {
    const { renderingItemCart } = this.props;
    return (
      <div>
        <ul>
          {renderingItemCart.map((item) => (
            <div key={ item[0] } data-testid="product-add-to-cart">
              <h2 className="" data-testid="shopping-cart-product-name">
                {item[0]}
              </h2>
              <h3>{item[1]}</h3>
              <h3>{item[2]}</h3>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
