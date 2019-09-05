/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import ReduxThunk from 'redux-thunk';

export const middlewares = [ReduxThunk];
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export const storeFactory = initialState => {
  return createStoreWithMiddleware(rootReducer, initialState);
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
