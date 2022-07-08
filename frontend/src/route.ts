import { Component } from './types';

import ProductList from './view/product/ProductList';
import NotFound from './components/NotFountPage';

interface Route {
  path: string;
  component: Component;
}

const routes: Route[] = [{ path: '/', component: ProductList }];

function Route({ $target }) {
  const { pathname } = location;

  const route = routes.find(route => route.path === pathname);
  const CurrentComp = route ? route.component : NotFound;

  this.render = () => {
    new CurrentComp({ $target }).render();
  };
}

export default Route;
