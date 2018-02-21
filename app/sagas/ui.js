import { takeEvery, put, call, select, fork } from 'redux-saga/effects';
import { LOGIN } from '../constants/user';

function* loginErrorSaga({ payload }) {
  console.log(payload);
}

export default function* userSaga() {
  yield* [
    takeEvery(LOGIN.POST.FAIL, loginErrorSaga),
  ];
}