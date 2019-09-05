import React from 'react';
import { shallow } from 'enzyme';
import InputComponent from './Input';
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
