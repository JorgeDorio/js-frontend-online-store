import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Card from './Card';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.givingCategories();
  }

  givingCategories = async () => {
    const myData = await getCategories();
    this.setState({ allCategories: myData });
  }


  render() {
    const { allCategories } = this.state;

    return (
      <div>
        <h1 className="titleClass">Conteudo</h1>
        <div className="content">
          {allCategories.map((product) => (
            <Card
              key={ product.id }
              id={ product.id }
              name={ product.name }
            />
          ))}
        </div>
      </div>
    return (
      <h1 data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    );
  }
}

export default Content;
