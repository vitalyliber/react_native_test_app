import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tags from './tags.js';

export default createStore(
  combineReducers({ tags }),
  compose(applyMiddleware(thunk)),
);