import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { getComponentByAttr, checkProps } from './testUtils';

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

const setup = (props = {}, state = null) => {
  const initialProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GuessedWords {...initialProps} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders GuessedWords without crashing', () => {
  const wrapper = setup(defaultProps);
  const appComponent = getComponentByAttr(wrapper, 'component-guessed-words');
  expect(appComponent.length).toBe(1);
});

test('dose not throw warning with expected props', () => {
  checkProps(GuessedWords, defaultProps);
});

describe('If there are no words guessed...', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test('should render without errors', () => {
    const component = getComponentByAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('should render instructions to guess a word', () => {
    const component = getComponentByAttr(
      wrapper,
      'component-guess-instructions'
    );
    expect(component.text().length).not.toBe(1);
  });
});

describe('If there are words guessed...', () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'agile', letterMatchCount: 1 },
    { guessedWord: 'party', letterMatchCount: 7 }
  ];
  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test('should render without error', () => {
    const component = getComponentByAttr(wrapper, 'component-guessed-words');
    expect(component.length).toBe(1);
  });
  test('should render "guessed words" section', () => {
    const component = getComponentByAttr(wrapper, 'guessed-words');
    expect(component.length).toBe(1);
  });
  test('should correct number of guessed words', () => {
    const componentNodes = getComponentByAttr(wrapper, 'guessed-word');
    expect(componentNodes.length).toBe(guessedWords.length);
  });
});
