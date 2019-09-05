import { getLetterMatchCount } from '../helpers';
import Axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS',
  GUESS_WORD: 'GUESS_WORD',
  GET_SECRET_WORD: 'GET_SECRET_WORD'
};

export function correctGuess() {
  return { type: actionTypes.CORRECT_GUESS, payload: '' };
}

export const guessWord = guessedWord => (dispatch, getStore) => {
  const secretWord = getStore().secretWord;
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: actionTypes.GUESS_WORD,
    payload: { letterMatchCount, guessedWord }
  });

  if (guessedWord === secretWord) {
    dispatch({ type: actionTypes.CORRECT_GUESS });
  }
};

export const getSecretWord = () => dispatch => {
  return Axios.get('http://localhost:3030/')
    .then(res => {
      dispatch({ type: actionTypes.GET_SECRET_WORD, payload: res.data });
    })
    .catch(err => console.error(err));
};
