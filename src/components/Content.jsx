import React, { Component } from 'react';
import Card from './Card';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Content extends Component {
  // esse pedaço é do Searchbar e do Sidebar!
  constructor() {
    super();
    this.state = {
      textoDigitado: 'cadeira',
      // cadeira
      categorySelected: 'MLB5672',
      // id: MLB5672 / name: Acessórios para Veículos
      renderingCardArray: [],
    };
  }

  componentDidMount() {
    this.creatingCard();
  }

  creatingCard = async () => {
    const { textoDigitado, categorySelected } = this.state;
    const data = await getProductsFromCategoryAndQuery(categorySelected, textoDigitado);
    console.log(categorySelected);
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

export default Content;
