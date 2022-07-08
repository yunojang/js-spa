import { Component } from './types';

import ProductList from './view/product/ProductList';
import NotFound from './components/NotFountPage';

interface Route {
  component: Component;
  props?: any;
}

export const paths = {
  productList: '/',
};

const routes: { [key: string]: Route } = {
  [paths.productList]: { component: ProductList },
};

function Route({ $target }) {
  const { pathname } = location;

  const currnet = routes[pathname];

  const CurrentComp = currnet ? currnet.component : NotFound;
  const compProps = currnet ? currnet.props : {};

  this.render = () => {
    new CurrentComp({ $target, ...compProps }).render();
  };
}

export default Route;
