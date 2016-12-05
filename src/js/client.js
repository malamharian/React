import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products/:product" component={ProductDetail}></Route>
            <Route path="products" component={Products}></Route>
            <Route path="about" component={About}></Route>
        </Route>
    </Router>,
    document.getElementById('app')
);

module.hot.accept(() => {});