import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container } from './styles';
import ImageInput from './ImageInput';

export default function Profile() {
  return (
    <Container>
      <Form>
        <ImageInput />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <Input name="date" placeholder="Data do meetup" />
        <Input name="address" placeholder="Localização" />

        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
