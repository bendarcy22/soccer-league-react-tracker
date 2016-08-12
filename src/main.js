import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import routes from './components/routes';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
);
