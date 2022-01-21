import React, { Component } from 'react';
import { getCategories } from '../services/api';
import Card from './Card';

class Content extends Component {
  constructor() {
    super();

    this.state = {
      allCategories: [],
      // idsAndQuerrys: [],
    };
  }

  componentDidMount() {
    this.givingCategories();
  }

  givingCategories = async () => {
    const myData = await getCategories();
    this.setState({ allCategories: myData });
    // , () => { this.givingIdsAndQuerry(); }
    // console.log(myData);
  }

  // givingIdsAndQuerry = async () => {
  //   const { allCategories } = this.state;
  //   console.log(allCategories);
  //   allCategories.forEach(async (product) => {
  //     const object = await getProductsFromCategoryAndQuery(product.id, product.name);
  //     console.log(object);
  //   });
  // }

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
    );
  }
}

export default Content;
