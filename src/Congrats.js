import React, { Component } from 'react';

export default class Congrats extends Component {
  render() {
    return this.props.success ? (
      <div data-test="grats-component">
        <span data-test="message-display">Success</span>
      </div>
    ) : (
      <div data-test="grats-component"></div>
    );
  }
}
