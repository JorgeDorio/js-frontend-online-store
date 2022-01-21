import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { getProductsFromCategoryAndQuery } from '../services/api';

class Card extends Component {
  // Fez o teste na funcao getProductsFromCategoryAndQuery?

  // getObjectInfo = async (id, name) => {
  //   const item = await getProductsFromCategoryAndQuery(id, name);
  //   return item;
  // }

  // Qualqur coisa se precisar falar é só comentar - Dimitry
  // Beleza - Filipe
  // Acho que ta funcionando
  // na verdade ele ta renderizando o id e o name da primeira funçao.

  render() {
    const {
      id,
      name,
    } = this.props;

    // const item = this.getObjectInfo(id, name);
    // this.setState({ item });

    return (
      <div className="cardClass" data-testid="product">
        <h3>
          {id}
        </h3>
        <img
          src="https://i.stack.imgur.com/l60Hf.png"
          alt="Alternative"
          data-testid=""
          width="150px"
        />
        <h4>
          {name}
        </h4>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Card;
