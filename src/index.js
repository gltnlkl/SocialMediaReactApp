import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/**
 * bu şekilde bir kullanım sadece index.js i alır.
 */
import AllReducers from './redux/reducers'
import { createStore } from 'redux';
import {Provider} from 'react-redux'

/**
 * Sorun: Eğer benim 100 adet Reducer ım olduğunda ne yapacağım ?
 * ÖNEMLİ!! bir klasör içinde index.js var ise o direkt çağırılır.
 */
/**
 * redux tools için gerekli parameterler girilmeli.
 * // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 */
 const store = createStore(
  AllReducers, /* preloadedState, */ window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
