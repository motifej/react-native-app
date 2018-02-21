import { takeEvery, put, call, select, fork } from 'redux-saga/effects';
import { LOGIN } from '../constants/user';
import { login } from '../actions/user';

function* loginSaga({ payload }) {
  console.log(payload);
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
  ];
}