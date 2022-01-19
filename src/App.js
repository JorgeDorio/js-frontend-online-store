import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

// getCategories();
getProductsFromCategoryAndQuery(getCategories());
class App extends React.Component {
  // First commit

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
