import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Content from './components/Content';
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
        </div>
      </BrowserRouter>
    );
  }
}
