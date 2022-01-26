import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../components/Card';

export default class ProductDetails extends Component {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    // console.log(match);
    return (
      <div>
        Product Details
        <h3 data-testid="product-detail-name">{id}</h3>
        <button type="button">Add Cart</button>
        <Card />
      </div>
    );
  }
}

// ProductDetails.propTypes = {
//   match: PropTypes.shape({
//     params: PropTypes.shape({
//       id: PropTypes.string,
//     }),
//   }),
// };

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

// const { match } = this.props;
// ProductDetails.defaultProps = {
//   match,
// };
