import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      textoDigitado: '',
    };
  }

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({ textoDigitado: value });
  };

  searchQuery = async () => {
    const inputValue = document.querySelector('#search').value;
    const { categorySelected } = this.state;
    const data = await getProductsFromCategoryAndQuery(categorySelected, inputValue);
    console.log(inputValue);
    console.log(categorySelected);
    console.log(data);
  }

  render() {
    const { textoDigitado } = this.state;

    return (
      <div>
        <form>
          <label htmlFor="search" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="search"
              onChange={ this.handleChange }
              value={ textoDigitado }
              data-testid="query-input"
              className="searchbar"
            />
          </label>

          {/* Botão para Pesquisar */}
          <button
            type="button"
            data-testid="query-button"
            onClick={ this.searchQuery }
          >
            Pesquisar
          </button>

          {/* Botão para Carrinho de Compras */}
          <Link to="/EmptyCart" data-testid="shopping-cart-button">
            <button type="button">
              Carrinho de Compras
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Searchbar;
