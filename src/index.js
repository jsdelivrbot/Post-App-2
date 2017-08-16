import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
//Router decides what React Components need to render in the screen using URL
//browserHistory - when URL changes it will update the React Router
//we have hashHistory and memoryHistory bascially it checks what part of URL changes then based on that it denotes the React Router about the changes happened

import reducers from './reducers';
import routes from './routes';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//If browserHistory URL changes then it intimates the Router about the changes then based on the routes file it render the component defined in the for the particular path set.
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />	
  </Provider>
  , document.querySelector('.container'));
