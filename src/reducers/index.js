import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import settings from './settings';
import demos from './demos';

const reducers = {
  routing: routerReducer,
  settings,
  demos
};

module.exports = combineReducers(reducers);
