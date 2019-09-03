import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { isBefore, parseISO } from 'date-fns';

import api from '~/services/api';
import history from '~/services/history';

import {
  meetappIndexSuccess,
  meetappCreateSuccess,
  meetappEditSuccess,
} from './actions';
import { signOut } from '~/store/modules/auth/actions';

export function* getMeetups() {
  try {
    const response = yield call(api.get, 'mymeetups');
    yield put(meetappIndexSuccess(response.data));
  } catch (error) {
    yield put(signOut());
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

export function* cancelMeetup({ payload }) {
  const { meetup } = payload;

  if (isBefore(parseISO(meetup.date), new Date())) {
    toast.error('Você não pode cancelar um meetup que já passou!');
    return;
  }

  try {
    yield call(api.delete, `meetup/${meetup.id}`);
    toast.success('Meetup cancelado com sucesso!');
    history.push('/');
  } catch (error) {
    toast.error('Não foi possíve cancelar o meetup!');
  }
}

export function* updateMeetup({ payload }) {
  const { data } = payload;

  try {
    yield call(api.put, 'meetup', data);
    toast.success('Meetup atualizado com sucesso!');
    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar o meetapp, verifique as informações!');
  }
}

export function* editMeetup({ payload }) {
  const { data: meetup } = payload;

  if (isBefore(parseISO(meetup.date), new Date()))
    toast.error('Você não pode editar um meetup que já passou!');
  else {
    yield put(meetappEditSuccess(meetup));
    history.push('/newedit');
  }
}

export default all([
  takeLatest('persist/REHYDRATE', getMeetups),
  takeLatest('@meetapp/MEETAPP_CREATE_REQUEST', meetappCreate),
  takeLatest('@meetapp/MEETAPP_VIEW', meetappView),
  takeLatest('@meetapp/MEETAPP_INDEX', getMeetups),
  takeLatest('@meetapp/MEETAPP_CANCEL_REQUEST', cancelMeetup),
  takeLatest('@meetapp/MEETAPP_UPDATE_REQUEST', updateMeetup),
  takeLatest('@meetapp/MEETAPP_EDIT_REQUEST', editMeetup),
]);
