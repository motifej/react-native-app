import { combineReducers } from 'redux';
import combineEvents from '../utils/combineEvents';
import { LOGIN } from '../constants/user';


const loginError = combineEvents(
  {
    [LOGIN.POST.FAIL]: (state, { payload }) => payload.error,
  },
  null,
);

export default combineReducers({
  loginError,
});