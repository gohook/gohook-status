import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Home from 'containers/Home';
import New from 'containers/New';
import Settings from 'containers/Settings';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="settings" component={Settings} />
    <Route path="new" component={New} />
  </Route>
);
