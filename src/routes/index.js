import React from 'react';
import { RenderRoutes } from './helper';

const ROUTES = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <h1>Hello World</h1>,
  },
];

export { RenderRoutes };
export default ROUTES;
