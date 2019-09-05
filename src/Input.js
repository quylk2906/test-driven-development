import React, { Component } from 'react';
import { connect } from 'react-redux';
class Input extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {success ? null : (
          <div>
            <button type="submit" data-test="submit-button"></button>
            <input data-test="input-box"></input>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

// export default Input
export default connect(
  mapStateToProps,
)(Input);
