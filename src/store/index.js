import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import tags from './tags';
import date from './date';
import datepicker from './datepicker';

export default createStore(
  combineReducers({ tags, date, datepicker }),
  compose(applyMiddleware(thunk)),
);