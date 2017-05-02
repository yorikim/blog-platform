import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostActionTypes';

const initState = {
  isFetching: false,
  error: false,
  entry: null
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.FETCH_POST_REQUEST:
      return assign({}, initState, { isFetching: true });
    case types.FETCH_POST_ERROR:
      return assign({}, initState, { error: true });
    case types.FETCH_POST_SUCCESS:
      return assign({}, initState, { entry: action.response });
    default:
      return state;
  }
}
