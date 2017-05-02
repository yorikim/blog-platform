import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const initState = {
  isFetching: false,
  error: false,
  entries: []
};

export default function(state = initState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initState, { entries: action.response });
    default:
      return state;
  }
}
