import React from 'react';
import { shallow } from 'enzyme';
// import jest from 'jest';
import App, { App as UnconnectedAp } from './App';
import { getComponentByAttr, storeFactory } from './testUtils';

const setup = (state = {}) => {
  const wrapper = shallow(<App store={storeFactory(state)} />)
    .dive()
    .dive();
  // if (state) {
  //   wrapper.setState(state);
  // }
  return wrapper;
};

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = getComponentByAttr(wrapper, 'app-component');
  expect(appComponent.length).toBe(1);
});

describe('Testing redux props', () => {
  test('should have access to `success` state', () => {
    const initialState = { success: true };
    const wrapper = setup(initialState);
    const expectedProp = wrapper.instance().props.success;
    expect(expectedProp).toBe(true);
  });
  test('should have access to `secretWord` state', () => {
    const initialState = { secretWord: 'party' };
    const wrapper = setup(initialState);
    const expectedProp = wrapper.instance().props.secretWord;
    expect(expectedProp).toBe(initialState.secretWord);
  });
  test('should have access to `guessedWords` state', () => {
    const initialState = {
      guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
    };
    const wrapper = setup(initialState);
    const expectedProp = wrapper.instance().props.guessedWords;
    expect(expectedProp).toEqual(initialState.guessedWords);
  });
  test('`getScretWord` action creator is a function on props', () => {
    const wrapper = setup();
    const expectedProp = wrapper.instance().props.getSecretWord;
    expect(expectedProp).toBeInstanceOf(Function);
  });

  test('`getScretWord`runs on App Mount', () => {
    const getSecretWordMock = jest.fn();
    const wrapper = shallow(
      <UnconnectedAp
        getSecretWord={getSecretWordMock}
        success={false}
      ></UnconnectedAp>
    );
    wrapper.instance().componentDidMount();
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
  });
});

