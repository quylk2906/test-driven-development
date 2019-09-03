import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {
  render() {
    return this.props.success ? (
      <div data-test="congrats-component">
        <span data-test="message-display">Success</span>
      </div>
    ) : (
      <div data-test="congrats-component"></div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
