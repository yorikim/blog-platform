import React from 'react';
import {Router} from 'react-router';
import browserHistory from 'helpers/history';
import routes from 'routes';

const App = () => (
  <Router history={browserHistory} routes={routes} />
);

export default App;
