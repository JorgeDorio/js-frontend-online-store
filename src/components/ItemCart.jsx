import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: props.name,
  //     quantidade: props.quantidade,
  //     valor: props.valor,
  //     // renderingItemCart: props.renderingItemCart,
  //   };
  // // this.addNewItem = this.addNewItem.bind(this);
  // }

  render() {
    const { id, name, quantidade, valor, handlePlusClick, handleSubClick } = this.props;
    return (
      <div>
        <ul>
          <div key={ id }>
            <div data-testid="shopping-cart-product-quantity">
              <h3>{quantidade}</h3>
            </div>
            <h3 data-testid="shopping-cart-product-name">{`${name}.`}</h3>
            <h3>{`R$${valor}`}</h3>
            {/* preciso de uma func embaixo para onclick */}
            <div data-testid="product-increase-quantity">
              <button
                type="button"
                onClick={ () => { handlePlusClick(id); } }
              >
                (+)
              </button>
            </div>
            <div data-testid="product-decrease-quantity">
              <button
                type="button"
                onClick={ () => { handleSubClick(id); } }
              >
                (-)
              </button>
            </div>
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
  // renderingItemCart: PropTypes.objectOf({
  //   props: PropTypes.object,
  // }).isRequired,
};
