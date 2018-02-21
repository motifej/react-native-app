import { combineReducers } from 'redux';
import combineEvents from '../utils/combineEvents';
import { LOGIN, GET_USER } from '../constants/user';


export default combineEvents(
  {
    [LOGIN.POST.SUCCESS]: (state, { payload }) => payload.data,
  },
  null,
);
