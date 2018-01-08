import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer.js';
import createBrowserHistory from '../node_modules/history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  applyMiddleware(middleware)
);

export default store;
