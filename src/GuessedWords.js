import React from 'react';
import PropTypes from 'prop-types';

function GuessedWords(props) {
  return <div data-test="guessed-words"></div>;
}

GuessedWords.propTypes = {
  name: PropTypes.bool
};

export default GuessedWords;
