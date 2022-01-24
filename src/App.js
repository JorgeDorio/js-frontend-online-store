import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Cart from './pages/Cart';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textoDigitado: [],
      categorySelected: '',
    };

    this.sidebarCallback = this.sidebarCallback.bind(this);
    this.searchbarCallback = this.searchbarCallback.bind(this);
    this.creatingCard = this.creatingCard.bind(this);
  }

  sidebarCallback(categorySelected) {
    this.setState({ categorySelected });
  }

  searchbarCallback(textoDigitado) {
    this.setState({ textoDigitado });
  }

  render() {
    const { textoDigitado, categorySelected } = this.state;
    return (
      <BrowserRouter>
        <div className="root">
          <Sidebar sidebarCallback={ this.sidebarCallback } />
          <div className="searchNContent">
            <Searchbar
              searchbarCallback={ this.searchbarCallback }
              creatingCard={ this.creatingCard }
            />
            <Content
              textoDigitado={ textoDigitado }
              categorySelected={ categorySelected }
              creatingCard={ this.creatingCard }
            />
          </div>
          <Cart />
        </div>
      </BrowserRouter>
    );
  }
}
