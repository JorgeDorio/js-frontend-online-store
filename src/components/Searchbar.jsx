import React, { Component } from 'react';

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      input: '',
    };
  }

  handleChange({ target }) {
    // const { input } = this.state;
    this.setState({
      input: target.value,
    });
    // console.log(this.state.input);
  }

  render() {
    const { input } = this.state;
    return (
      <input
        className="searchbar"
        type="text"
        onChange={ this.handleChange }
        value={ input }
      />
    );
  }
}
