import { fork } from 'redux-saga/effects';
import ui from './ui';
import user from './user';


export default function* rootSaga() {
  return yield [
    fork(ui),
    fork(user),
  ];
}