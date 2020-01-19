import { all, fork } from 'redux-saga/effects';
import * as headerSagas from 'Components/Header/store/saga';


export default function* sagas() {
  yield all([...Object.values(headerSagas)].map(fork));
}