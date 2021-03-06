import React from 'react';
import ReactDOM from 'react-dom';
import { Router, match, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';
import store from 'store';
import prepareData from 'helpers/prepareData';
import DevTools from 'containers/DevTools';

function historyCb(location) {
  match({ location, routes }, (error, redirect, state) => {
    if (!error && !redirect) {
      prepareData(store, state);
    }
  });
}

browserHistory.listenBefore(historyCb);

historyCb(window.location);

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
);

ReactDOM.render(
  <DevTools store={store}/>,
  document.getElementById('devtools'),
  () => {
    delete window.__INITIAL_STATE__;
  }
);

export default App;
