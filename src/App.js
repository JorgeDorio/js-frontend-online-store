import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Sidebar from './components/Sidebar';
import Searchbar from './components/Searchbar';
import Content from './components/Content';
import MainPage from './pages/MainPage';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={ MainPage } />
        <Sidebar />
        <div className="searchNContent">
          <Searchbar />
          <Content />
        </div>
      </BrowserRouter>
    );
  }
}
