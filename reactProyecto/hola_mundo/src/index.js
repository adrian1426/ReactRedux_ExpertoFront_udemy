import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import reducer from './reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store= createStore(combineReducers({
    contador:reducer,
    form: formReducer
}));

ReactDOM.render(
<Provider store={store}><App /></Provider>
, document.getElementById('root'));
serviceWorker.unregister();