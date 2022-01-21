import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      allCategories: [],
    };
  }

  componentDidMount() {
    this.givingCategories();
  }

  givingCategories = async () => {
    const myData = await getCategories();
    this.setState({ allCategories: myData });
    // console.log(myData);
  }

  render() {
    const { allCategories } = this.state;
    return (
      <div className="sidebar">
        <h1>CATEGORIAS</h1>
        <ul>
          {allCategories.map((cat) => (
            <li className="categorie" key={ cat.id } data-testid="category">
              <button type="button" onClick={ () => (console.log(cat.name)) }>
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Sidebar;
