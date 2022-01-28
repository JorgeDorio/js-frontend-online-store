import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  searchQuery = async () => {
    const { searchbarCallback } = this.props;
    const inputValue = document.querySelector('#search').value;
    searchbarCallback(inputValue);
  }

  render() {
    const { textoDigitado } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="search" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
            <input
              type="text"
              id="search"
              value={ textoDigitado }
              data-testid="query-input"
              className="searchbar"
            />
          </label>

          {/* Botão para Pesquisar */}
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => {
              this.searchQuery();
            } }
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

Searchbar.propTypes = {
  searchbarCallback: PropTypes.func.isRequired,
  textoDigitado: PropTypes.string.isRequired,
};

export default Searchbar;
