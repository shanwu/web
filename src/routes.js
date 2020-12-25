import PriceRentalRatioPage from './page/PriceRentalRatioPage';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import GoldPricePage from './page/GoldPricePage';
import RegisterPage from './page/RegisterPage';
import LatexArticlePage from './page/LatexArticlePage';
import CurrecnciesExchangeAppPage from './page/CurrenciesExchangeRate'
import React from 'react';
import App from './App';
import {
    useParams
  } from "react-router-dom";

  const routes = (
    <HashRouter basename='/'>
        <Route exact path="/" component={App} />
        <Route path="/house" component={PriceRentalRatioPage} />
        <Route path="/gold" component={GoldPricePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/latex_article" component={LatexArticlePage} />
        <Route path="/currencies_exchange_article" component={CurrecnciesExchangeAppPage} />

    </HashRouter>
);


  export default routes;