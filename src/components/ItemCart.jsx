import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  render() {
    const { renderingItemCart } = this.props;
    console.log(renderingItemCart);
    return (
      <div>
        <ul>
          {Object.entries(renderingItemCart).map((item) => (
            <div key={ item }>
              {/* <h2 className="" data-testid="shopping-cart-product-name">
                  {item.name}
                </h2>
                <h3>{item.price}</h3> */}
              <h3 data-testid="shopping-cart-product-quantity">
                {`${item[1].quantidade}x:`}
              </h3>
              <h3 data-testid="shopping-cart-product-name">
                {`${item[1].name}.`}
              </h3>
              <h3 data-testid="">
                {`R$${item[1].valor}`}
              </h3>
              <button
                type="button"
                onClick={ console.log((item.id)) }
              >
                +
              </button>
              <hr />
              <br />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

ItemCart.propTypes = {
  renderingItemCart: PropTypes.objectOf({
    props: PropTypes.object,
  }).isRequired,
};
