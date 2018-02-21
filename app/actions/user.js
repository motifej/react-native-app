import * as types from '../constants/user';
import { createRequestActions } from '../utils/createRequestActions';

export const login = {
  post: createRequestActions({
    request: types.LOGIN.POST.REQUEST,
    success: types.LOGIN.POST.SUCCESS,
    fail: types.LOGIN.POST.FAIL,
  }),
};

export const confirmLogin = {
  post: createRequestActions({
    request: types.CONFIRM_LOGIN.POST.REQUEST,
    success: types.CONFIRM_LOGIN.POST.SUCCESS,
    fail: types.CONFIRM_LOGIN.POST.FAIL,
  }),
};
