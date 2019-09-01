import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

export function* meetappCreate({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, 'meetup', data);
    toast.success('Meetapp criado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Error ao criar o meetapp');
  }
}

export default all([
  takeLatest('@meetapp/MEETAPP_CREATE_REQUEST', meetappCreate),
]);
