import { takeEvery, put, call, select, fork } from 'redux-saga/effects';
import { LOGIN, CONFIRM_LOGIN } from '../constants/user';
import { login, confirmLogin } from '../actions/user';
import { registerCustomer, loginCustomer } from '../api';
import { NavigationActions } from 'react-navigation/src/react-navigation';

function* loginSaga({ payload: { data } }) {
  try {
    const res = yield call(registerCustomer, data);
    yield put(login.post.success(res));
    yield put(NavigationActions.navigate({ routeName: 'ConfirmLoginScreen' }));
  } catch(err) {
    yield put(login.post.fail(err));
  }
}

function* confirmLoginSaga({ payload: { data }}) {
  try {
    const phone = yield select(state => state.user.phone);
    const res = yield call(loginCustomer, phone, data);
    yield put(confirmLogin.post.success(res))
  } catch(err) {
    yield put(confirmLogin.post.fail(err));
  }
}

function* checkUserInStorage() {

}

function* sendVerificationSaga() {

}

function setTokenSaga({ payload: { data } }) {
  const { token, userId } = data;
}

export default function* userSaga() {
  yield* [
    fork(checkUserInStorage),
    takeEvery(LOGIN.POST.REQUEST, loginSaga),
    takeEvery(CONFIRM_LOGIN.POST.REQUEST, confirmLoginSaga),
  ];
}
