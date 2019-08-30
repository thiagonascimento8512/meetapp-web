import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import { signUpRequest } from '~/store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('O email é obrigatório'),
  password: Yup.string()
    .min(4, 'No mínimo 4 caracteres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <div>
      <img src={logo} alt="Meetapp" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">
          {loading ? 'Processando...' : 'Criar conta'}
        </button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </div>
  );
}
