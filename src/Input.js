import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class InputComponent extends Component {
  constructor(params) {
    super(params);
    this.inputRef = React.createRef();
  }

  submitGuessedWord = ev => {
    ev.preventDefault();
    const guessedWord = this.inputRef.current.value;
    if (guessedWord && guessedWord.length) {
      this.props.guessWord(guessedWord);
    }
    this.inputRef.current = { value: '' };
  };

  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {success ? null : (
          <div>
            <button
              type="submit"
              data-test="submit-button"
              onClick={this.submitGuessedWord}
            ></button>
            <input ref={this.inputRef} data-test="input-box"></input>
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
  { guessWord }
)(InputComponent);
