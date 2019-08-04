import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import {createStore, combineReducers} from 'redux';
import { reducer  as formReducer} from 'redux-form';
import * as reducers from './reducers';

const store= createStore(combineReducers({
    ...reducers,
    form:formReducer
}));
ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));
serviceWorker.unregister();