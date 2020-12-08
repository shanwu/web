import PriceRentalRatioPage from './page/PriceRentalRatioPage';
import { HashRouter, Route, BrowserRouter as Router } from 'react-router-dom';
import GoldPricePage from './page/GoldPricePage';
import RegisterPage from './page/RegisterPage';
import ArticlePage from './page/ArticlePage';
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
        <Route path="/article" component={ArticlePage} children={<Child />}/>

    </HashRouter>
);

function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();
  
    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
  }

  export default routes;