import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderingItemCart: props.renderingItemCart,
    };
    // this.addNewItem = this.addNewItem.bind(this);
  }

  // componentDidUpdate() {
  // const { renderingItemCart } = this.state;
  // console.log(renderingItemCart);
  // this.addNewItem(renderingItemCart);
  // renderingItemCart.map((item) => (
  //   this.addNewItem(item)
  // ));
  // }

  // addNewItem = (item) => {
  //   // para acrescentarmos ou removermos algo de uma propriedade
  //   // do state, precisamos passar uma callback para o setState
  //   this.setState((prevState) => {
  //     return {
  //       renderingItemCart: [...prevState.renderingItemCart, item],
  //     };
  //   });
  // }

  render() {
    const { renderingItemCart } = this.state;
    const { name, quantidade, valor } = this.state;
    return (
      <div>
        <ul>

          {Object.entries(renderingItemCart).map((item) => (
            <div key={ item }>
              <h3>{`${item[1].quantidade}x:`}</h3>
              <h3>{`${item[1].name}.`}</h3>
              <h3>{`R$${item[1].valor}`}</h3>
            </div>

          ))}

          {/* {Object.entries(renderingItemCart).map((item) => (
            <div key={ item }>
              <h3 data-testid="shopping-cart-product-quantity">
                {`${item[1].quantidade}x:`}
              </h3>
              <h3 data-testid="shopping-cart-product-name">
                {`${item[1].name}.`}
              </h3>
              <h3 data-testid="">
                {`R$${item[1].valor}`}
              </h3>
              {/* <button type="button" onClick={ () => { console.log(item[1].quantidade); } }> + </button>
              <hr />
              <br />
            </div>
          ))} */}
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
