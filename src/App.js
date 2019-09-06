import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSecretWord } from './actions';
import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import InputComponent from './Input';

export class App extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" data-test="app-component">
          <h1>Jotto</h1>
          <Congrats success={this.props.success}></Congrats>
          <InputComponent></InputComponent>
          <GuessedWords guessedWords={this.props.guessedWords}></GuessedWords>
        </header>
      </div>
    );
  }
}
const mapStateToProps = ({ secretWord, guessedWords, success }) => {
  return { secretWord, guessedWords, success };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(App);
