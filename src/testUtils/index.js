/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export const storeFactory = initialState => {
  return createStore(rootReducer, initialState);
};

export const getComponentByAttr = (wrapper, attr) =>
  wrapper.find(`[data-test="${attr}"]`);

export const checkProps = (wrapperComponent, conformingProp) => {
  const propError = checkPropTypes(
    wrapperComponent.propTypes,
    conformingProp,
    'prop',
    wrapperComponent.name
  );
  expect(propError).toBeUndefined();
};
