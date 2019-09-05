import { correctGuess, actionTypes } from '../actions/index';

describe('Testing action creator', () => {
  test('should returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS,
      payload: ''
    });
  });
});
