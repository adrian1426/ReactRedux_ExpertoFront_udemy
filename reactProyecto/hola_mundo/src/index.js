import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router} from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';

const createHistory = require('history').createBrowserHistory;
const history= createHistory();

ReactDOM.render(
<Router history={history}>
<App />
</Router>, document.getElementById('root'));
serviceWorker.unregister();