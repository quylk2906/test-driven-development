import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Congrats {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
};

const getComponentByAttr = (wrapper, attr) =>
  wrapper.find(`[data-test="${attr}"]`);

test('renders without crashing', () => {
  const wrapper = setup();
  const appComponent = getComponentByAttr(wrapper, 'grats-component');
  expect(appComponent.length).toBe(1);
});

test('renders text when `success` is false', () => {
  const wrapper = setup({ success: false });
  const congratComponent = getComponentByAttr(wrapper, 'grats-component');
  expect(congratComponent.length).toBe(1);
});

test('renders text when `success` is true', () => {
  const wrapper = setup({ success: true });
  const congratComponent = getComponentByAttr(wrapper, 'grats-component');
  expect(congratComponent.length).toBe(1);
});
