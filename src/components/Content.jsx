import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Content extends Component {
  constructor() {
    super();
    this.state = {
      renderingCardArray: [],
    };
  }

  // componentDidUpdate() {
  //   this.creatingCard();
  // }

  componentDidMount() {
    this.creatingCard();
  }

  creatingCard = async () => {
    const { categorySelected, textoDigitado } = this.props;
    const data = await
    getProductsFromCategoryAndQuery(categorySelected, textoDigitado);
    const listArray = data.results.map((item) => (
      <Card
        key={ item.id }
        titulo={ item.title }
        foto={ item.thumbnail }
        price={ item.price }
        idCategory={ item.category_id }
      />
    ));
    this.setState({ renderingCardArray: listArray });
  }

  render() {
    const { renderingCardArray } = this.state;

    return (
      <div>
        <h1 className="titleClass">Content</h1>
        <div className="content">
          {renderingCardArray}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  categorySelected: PropTypes.string.isRequired,
  textoDigitado: PropTypes.string.isRequired,
};

export default Content;
