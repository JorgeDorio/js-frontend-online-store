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
      renderingItemCart: {},
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
        id={ item.id }
        foto={ item.thumbnail }
        price={ item.price }
        idCategory={ item.category_id }
        cartCallback={ this.cartCallback }
      />
    ));
    this.setState({ renderingCardArray: listArray });
  }

  handlePlusClick = (id) => {
    this.setState((prevState) => ({
      renderingItemCart: {
        [id]: {
          quantidade: prevState.renderingItemCart[id].quantidade + 1,
          name: prevState.renderingItemCart[id].name,
          id,
          valor: prevState.renderingItemCart[id].valor,
        },
      },
    }));
  }

  handleSubClick = (id) => {
    this.setState((prevState) => ({
      renderingItemCart: {
        [id]: {
          quantidade: prevState.renderingItemCart[id].quantidade - 1,
          name: prevState.renderingItemCart[id].name,
          id,
          valor: prevState.renderingItemCart[id].valor,
        },
      },
    }));
  }

  sidebarCallback(categorySelected) {
    this.setState({ categorySelected }, this.creatingCard);
  }

  searchbarCallback(textoDigitado) {
    this.setState({ textoDigitado }, this.creatingCard);
  }

  cartCallback(id, item, price) {
    // Pega o estado atual
    const { renderingItemCart } = this.state;

    // Verifica se já existe algum item com o ID do item adicionado, se sim, adiciona uma unidade à quantidade, se não, determina a quantidade como 1.
    const quant = renderingItemCart[id] === undefined
      ? 1 : renderingItemCart[id].quantidade + 1;

    // Gera o objeto
    const cartItem = {
      id,
      name: item,
      valor: price,
      quantidade: quant,
    };

    // Adiciona o objeto ao estado
    renderingItemCart[id] = cartItem;

    // Atualiza o estado
    this.setState(renderingItemCart);
  }

  render() {
    const {
      textoDigitado,
      categorySelected,
      renderingCardArray,
      renderingItemCart,
    } = this.state;

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
            />
          </div>
          <Cart
            renderingItemCart={ renderingItemCart }
            handlePlusClick={ this.handlePlusClick }
            handleSubClick={ this.handleSubClick }
          />
        </div>
      </BrowserRouter>
    );
  }
}
