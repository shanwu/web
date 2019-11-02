import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import GoldPricePage from './page/GoldPricePage';
import PriceRentalRatioPage from './page/PriceRentalRatioPage';
import routes from './routes';
// https://codeburst.io/getting-started-with-react-router-5c978f70df91


ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
