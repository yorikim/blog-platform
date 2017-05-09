import { assign } from 'lodash';

import * as types from 'constants/actionTypes/PostsActionTypes';

const PAGE_SIZE = 5;

const initState = {
  isFetching: false,
  error: false,
  entries: [],
  pagination: {
    current: 1,
    total: 1
  }
};

export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_POSTS_REQUEST:
      return assign({}, initState, { isFetching: true });
    case types.FETCH_POSTS_ERROR:
      return assign({}, initState, { error: true });
    case types.FETCH_POSTS_SUCCESS:
      return assign({}, initState, {
        entries: action.response.items,
        pagination: {
          current: 1,
          total: Math.ceil(action.response.items / PAGE_SIZE)
        }
      });
    default:
      return state;
  }
}
