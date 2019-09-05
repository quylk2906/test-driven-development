import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = props => {
  let content;
  if (props.guessedWords.length) {
    content = (
      <div data-test="guessed-words">
        {props.guessedWords.map(item => (
          <p key={item.guessedWord} data-test="guessed-word">
            {item.guessedWord}
          </p>
        ))}
      </div>
    );
  } else {
    content = (
      <span data-test="component-guess-instructions">
        Try to guess the secret word.
      </span>
    );
  }
  return <div data-test="component-guessed-words">{content}</div>;
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    }).isRequired
  )
};

export default GuessedWords;
