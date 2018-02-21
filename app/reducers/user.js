import { combineReducers } from 'redux';
import combineEvents from '../utils/combineEvents';
import { LOGIN, GET_USER } from '../constants/user';


const token = combineEvents(
  {
    [LOGIN.POST.SUCCESS]: (state, { payload }) => payload.data.token,
  },
  null,
);

const userId = combineEvents(
  {
    [LOGIN.POST.SUCCESS]: (state, { payload }) => payload.data.userId,
  },
  null,
);

const userMeta = combineEvents(
  {
    [LOGIN.POST.SUCCESS]: (state, { payload }) => payload.data.userMeta,
    [GET_USER.POST.SUCCESS]: (state, { payload }) => ({ ...state, ...payload.data }),
  },
  null,
);

export default combineReducers({
  token,
  userId,
  userMeta,
});