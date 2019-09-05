import successReducer from './success.reducer';
import { actionTypes } from '../actions/index';

describe('Testing `Success Reducer`', () => {
  test('should return initial state when no action is passed', () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
  });

  test('should return state of true upon receiving action of type `CORRECT_GUESS`', () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toBe(true);
  });
});
