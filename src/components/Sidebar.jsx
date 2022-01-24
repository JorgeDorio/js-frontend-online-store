import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      allCategories: [],
      // categorySelected: '',
    };
  }

  componentDidMount() {
    this.listingCategories();
  }

  listingCategories = async () => {
    const data = await getCategories();
    this.setState({ allCategories: data });
  }

  render() {
    const { allCategories } = this.state;
    const { sidebarCallback } = this.props;
    return (
      <div className="sidebar">
        <h1>CATEGORIAS</h1>
        <ul>
          {allCategories.map((cat) => (
            <li className="categorie" key={ cat.id } data-testid="category">
              <button
                type="button"
                onClick={ () => {
                  sidebarCallback(cat.id);
                } }
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  sidebarCallback: PropTypes.func.isRequired,
};

export default Sidebar;
