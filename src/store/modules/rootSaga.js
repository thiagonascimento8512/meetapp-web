import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import meetapp from './meetapp/sagas';

export default function* rootSaga() {
  yield all([auth, user, meetapp]);
}
