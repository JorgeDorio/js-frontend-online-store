import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Content extends Component {
  componentDidMount() {
    const { creatingCard } = this.props;
    creatingCard();
  }

  render() {
    const { renderingCardArray } = this.props;
    console.log(renderingCardArray);

    return (
      <div>
        <h1 className="titleClass">Content</h1>
        <div className="content">
          {renderingCardArray}
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  creatingCard: PropTypes.func.isRequired,
  renderingCardArray: PropTypes.arrayOf({
    props: PropTypes.object,
  }).isRequired,
};

export default Content;
