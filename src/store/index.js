import { createStore, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk';
import DevTools from 'containers/DevTools'
import reducers from 'reducers';

import APIMiddleware from 'middleware/API';

const store = (initialState) => createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(thunk, APIMiddleware),
    DevTools.instrument()
  )
);

export default store;
