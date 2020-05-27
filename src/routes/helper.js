import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';

const RouteWithSubRoutes = (route) => (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
);

export const RenderRoutes = ({ routes }) => (
  <Switch>
    {routes.map((route) => <RouteWithSubRoutes key={route.key} {...route} />)}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);
