import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { getComponentByAttr } from './testUtils';

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = getComponentByAttr(wrapper, 'app-component');
  expect(appComponent.length).toBe(1);
});

test('render counter button', () => {});
test('render counter number', () => {});
test('counter starts at 0', () => {
  const wrapper = setup();
  const counter = wrapper.state('counter');
  expect(counter).toBe(0);
});

test('render button increments counter display', () => {
  const wrapper = setup({}, { counter: 7 });
  const button = getComponentByAttr(wrapper, 'increment-button');
  const display = getComponentByAttr(wrapper, 'counter-display');
  button.simulate('click');
  wrapper.update();
  expect(display.text()).toContain(7);
});
