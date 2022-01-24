import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Searchbar from './components/Searchbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Cart from './pages/Cart';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <Sidebar />
          <div className="searchNContent">
            <Searchbar />
            <Content />
          </div>
          <Cart />
        </div>
      </BrowserRouter>
    );
  }
}
