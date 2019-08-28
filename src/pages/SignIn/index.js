import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="Meetapp" />

      <Form>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="button">Entrar</button>

        <a href="/">Criar conta grátis</a>
      </Form>
    </>
  );
}
