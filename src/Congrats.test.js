import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { getComponentByAttr, checkProps } from './testUtils';

const defaultProps = { success: false };

const setup = (props = {}, state = null) => {
  const initialProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...initialProps} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders without crashing', () => {
  const wrapper = setup(defaultProps);
  const appComponent = getComponentByAttr(wrapper, 'congrats-component');
  expect(appComponent.length).toBe(1);
});

test('renders text when `success` is false', () => {
  const wrapper = setup(defaultProps);
  const congratComponent = getComponentByAttr(wrapper, 'congrats-component');
  expect(congratComponent.text()).toBe('');
});

test('renders text when `success` is true', () => {
  const wrapper = setup({ success: true });
  const congratComponent = getComponentByAttr(wrapper, 'message-display');
  expect(congratComponent.text().length).not.toBe(0);
});

test('do not throw warning with expected props', () => {
  const expectedProp = { success: true };
  checkProps(Congrats, expectedProp);
});
