import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { toggleLoading } from './actions';

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    toast.success('Cadastro realizado com sucesso');
    history.push('/');
    yield put(toggleLoading());
  } catch (error) {
    toast.error('Erro no cadastro');
    console.tron.log(error);
    yield put(toggleLoading());
  }
}

export default all([takeLatest('@auth/SIGN_UP_REQUEST', signUp)]);
