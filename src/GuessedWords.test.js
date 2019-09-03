import React from 'react';
import { shallow } from 'enzyme';
import GuessedWords from './GuessedWords';
import { getComponentByAttr, checkProps } from './testUtils';

const defaultProps = { success: false };

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
  const appComponent = getComponentByAttr(wrapper, 'guessed-words');
  expect(appComponent.length).toBe(1);
});
