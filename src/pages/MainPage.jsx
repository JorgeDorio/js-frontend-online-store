import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from './EmptyCart';

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search">
          <input type="text" id="search" />
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <Link to="/EmptyCart" data-testid="shopping-cart-button">
            <button type="button">Cart</button>
          </Link>
          <EmptyCart />
        </div>
      </div>
    );
  }
}

export default MainPage;
