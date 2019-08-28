import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <div>
      <img src={logo} alt="Meetapp" />

      <Form>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="button">Entrar</button>

        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </div>
  );
}
