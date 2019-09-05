import { correctGuess, actionTypes, getSecretWord } from '../actions/index';
import moxios from 'moxios';
import { storeFactory } from '../testUtils';
describe('Testing action creator', () => {
  test('should returns an action with type `CORRECT_GUESS`', () => {
    const action = correctGuess();
    expect(action).toEqual({
      type: actionTypes.CORRECT_GUESS,
      payload: ''
    });
  });
});

describe('Testing Async action creator', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test('adds secret word to state', () => {
    const secretWord = 'party';
    const store = storeFactory();

    moxios.wait(() => {
      const req = moxios.requests.mostRecent();
      req.respondWith({ status: 200, response: secretWord });
    });
    return store
      .dispatch(getSecretWord())
      .then(result => {
        const newState = store.getState();
        expect(newState.secretWord).toBe(secretWord);
      })
      .catch(err => {
        console.error(err);
      });
  });
});
