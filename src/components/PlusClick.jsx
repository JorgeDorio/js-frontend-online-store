import React, { Component } from 'react';

export default class PlusClick extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={ console.log('teste') }
      >
        (+)
      </button>);
  }
}
