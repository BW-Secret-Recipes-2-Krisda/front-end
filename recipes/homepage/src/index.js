import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from './reducer/reducer';
//import { Button } from 'react-bootstrap';
//import history from './components/history';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, applyMiddleware(thunk,logger));
//function someFunc() {
//  history.push('/login')
//};
// <Button variant="btn btn-success" id="hideMe" onClick={someFunc()}></Button>

ReactDOM.render(
  <Provider store={store}>
      <Router>
            <App />
      </Router>
  </Provider>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
