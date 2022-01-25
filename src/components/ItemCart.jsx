import React, { Component } from 'react';

export default class ItemCart extends Component {
  render() {
    const { renderingItemCart } = this.props;
    return (
      <div>
        <ul>
          {
            Object.keys(renderingItemCart).map((item) => (
              <div key={ item } data-testid="product-add-to-cart">
                {/* <h2 className="" data-testid="shopping-cart-product-name">
                  {item.name}
                </h2>
                <h3>{item.price}</h3> */}
                {item}
              </div>
            ))
          }
        </ul>
      </div>
    );
  }
}
