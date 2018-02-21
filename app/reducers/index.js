import { combineReducers } from 'redux';
import user from './user';
import ui from './ui';
import nav from '../navigator/reducer';

export default combineReducers({
  nav,
  user,
  ui,
});
