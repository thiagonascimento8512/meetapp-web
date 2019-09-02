import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { meetappIndexSuccess, meetappCreateSuccess } from './actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'mymeetups');

    yield put(meetappIndexSuccess(response.data));
  } catch (error) {
    toast.error('Não foi possível obter os meetups!');
  }
}

export function* meetappCreate({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, 'meetup', data);
    yield put(meetappCreateSuccess(response.data));
    toast.success('Meetapp criado com sucesso!');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Error ao criar o meetapp');
  }
}

export function meetappView({ payload }) {
  console.tron.log(payload.id);
}

export default all([
  takeLatest('persist/REHYDRATE', getMeetups),
  takeLatest('@meetapp/MEETAPP_CREATE_REQUEST', meetappCreate),
  takeLatest('@meetapp/MEETAPP_VIEW', meetappView),
  takeLatest('@meetapp/MEETAPP_INDEX', getMeetups),
]);
