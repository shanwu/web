import PriceRentalRatioPage from './page/PriceRentalRatioPage';
import { HashRouter, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import GoldPricePage from './page/GoldPricePage';
import React from 'react';
import App from './App';

const routes = (
    <HashRouter basename='/'>
        <Route exact path="/" component={App} />
        <Route path="/house" component={PriceRentalRatioPage} />
        <Route path="/gold" component={GoldPricePage} />
    </HashRouter>
);

export default routes;