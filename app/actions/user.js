import * as types from '../constants/user';
import { createRequestActions } from '../utils/createRequestActions';

export const login = {
  post: createRequestActions({
    request: types.LOGIN.POST.REQUEST,
    success: types.LOGIN.POST.SUCCESS,
    fail: types.LOGIN.POST.FAIL,
  }),
};