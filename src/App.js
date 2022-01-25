import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Cart from './pages/Cart';
import Card from './components/Card';
import { getProductsFromCategoryAndQuery } from './services/api';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textoDigitado: [],
      categorySelected: '',
      renderingCardArray: [],
      renderingItemCart: [],
    };

    this.sidebarCallback = this.sidebarCallback.bind(this);
    this.searchbarCallback = this.searchbarCallback.bind(this);
    this.creatingCard = this.creatingCard.bind(this);
    this.cartCallback = this.cartCallback.bind(this);
  }

  creatingCard = async () => {
    const { categorySelected, textoDigitado } = this.state;
    const data = await
    getProductsFromCategoryAndQuery(categorySelected, textoDigitado);
    const listArray = data.results.map((item) => (
      <Card
        key={ item.id }
        titulo={ item.title }
        foto={ item.thumbnail }
        price={ item.price }
        idCategory={ item.category_id }
        cartCallback={ this.cartCallback }
      />
    ));
    this.setState({ renderingCardArray: listArray });
  }

  sidebarCallback(categorySelected) {
    this.setState({ categorySelected }, this.creatingCard);
  }

  searchbarCallback(textoDigitado) {
    this.setState({ textoDigitado }, this.creatingCard);
  }

  cartCallback(titulo, price, quantity = 1) {
    const { renderingItemCart } = this.state;
    if (renderingItemCart.includes(titulo)) {
      quantity += 1;
    }
    this.setState((prevState) => ({
      renderingItemCart: [
        ...prevState.renderingItemCart,
        `${quantity}x ${titulo}, R$${price}`,
      ],
    }));

    // const { renderingItemCart } = this.state;
    // renderingItemCart.push(titulo[price]);
    // this.setState({ renderingItemCart });
    // console.log(renderingItemCart);
  }

  render() {
    const { textoDigitado, categorySelected, renderingCardArray, renderingItemCart } = this.state;
    return (
      <BrowserRouter>
        <div className="root">
          <Sidebar
            sidebarCallback={ this.sidebarCallback }
            creatingCard={ this.creatingCard }
          />
          <div className="searchNContent">
            <Searchbar
              searchbarCallback={ this.searchbarCallback }
              creatingCard={ this.creatingCard }
            />
            <Content
              textoDigitado={ textoDigitado }
              categorySelected={ categorySelected }
              creatingCard={ this.creatingCard }
              renderingCardArray={ renderingCardArray }
              cartCallback={ this.cartCallback }
            />
          </div>
          <Cart renderingItemCart={ renderingItemCart } />
        </div>
      </BrowserRouter>
    );
  }
}
