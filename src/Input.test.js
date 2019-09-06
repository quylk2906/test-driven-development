import React from 'react';
import { shallow } from 'enzyme';
import InputComponent, {
  InputComponent as UnconnectedInputComponent
} from './Input';
import { storeFactory, getComponentByAttr } from './testUtils';

const defaultProps = {};

const setup = (initialState = {}) => {
  const initialProps = { ...defaultProps };
  const wrapper = shallow(
    <InputComponent {...initialProps} store={storeFactory(initialState)} />
  )
    .dive()
    .dive();
  return wrapper;
};

describe('Render `Input Component`', () => {
  let wrapper;
  beforeEach(() => {
    const initialState = { success: false };
    wrapper = setup(initialState);
  });
  describe('word has not been guessed', () => {
    test('should render without error', () => {
      const compnent = getComponentByAttr(wrapper, 'component-input');
      expect(compnent.length).toBe(1);
    });

    test('should render input box', () => {
      const compnent = getComponentByAttr(wrapper, 'input-box');
      expect(compnent.length).toBe(1);
    });

    test('should render submit button', () => {
      const compnent = getComponentByAttr(wrapper, 'submit-button');
      expect(compnent.length).toBe(1);
    });
  });
});

describe('Update state `Input Component`', () => {
  describe('word has been guessed', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup({ success: true });
    });
    test('should render without error', () => {
      const compnent = getComponentByAttr(wrapper, 'component-input');
      expect(compnent.length).toBe(1);
    });

    test('should not render input box', () => {
      const compnent = getComponentByAttr(wrapper, 'input-box');
      expect(compnent.length).toBe(0);
    });

    test('should not render submit button', () => {
      const compnent = getComponentByAttr(wrapper, 'submit-button');
      expect(compnent.length).toBe(0);
    });
  });
});

describe('Testing redux props', () => {
  test('should have success piece of state as props', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;
    expect(successProp).toBe(true);
  });
  test('should have  `guessWord` is as function', () => {
    const wrapper = setup();
    const expectedProp = wrapper.instance().props.guessWord;
    expect(expectedProp).toBeInstanceOf(Function);
  });
});

describe('`guessWord` action creator call', () => {
  const guessedWord = 'train';
  let wrapper;
  let guessWordMock;
  beforeEach(() => {
    guessWordMock = jest.fn();
    const props = {
      guessWord: guessWordMock
    };
    wrapper = shallow(
      <UnconnectedInputComponent {...props}></UnconnectedInputComponent>
    );
    wrapper.instance().inputRef.current = { value: guessedWord };
    const button = getComponentByAttr(wrapper, 'submit-button');
    button.simulate('click', { preventDefault() {} });
  });
  test('should call guessWord when button submit clicked', () => {
    const guessWordCallCount = guessWordMock.mock.calls.length;
    expect(guessWordCallCount).toBe(1);
  });
  test('should call guessWord with input value as argument', () => {
    const guessWordArg = guessWordMock.mock.calls[0][0];
    expect(guessWordArg).toBe(guessedWord);
  });
  test('should clear input box on submit', () => {
    expect(wrapper.instance().inputRef.current.value).toBe('');
  });
});
