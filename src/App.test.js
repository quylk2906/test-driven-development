import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const getComponentByAttr = (wrapper, attr) =>
  wrapper.find(`[data-test="${attr}"]`);

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
