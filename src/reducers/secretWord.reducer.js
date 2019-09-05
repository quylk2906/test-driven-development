import { actionTypes } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case actionTypes.GET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
};
