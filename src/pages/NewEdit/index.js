import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { meetappCreateRequest } from '~/store/modules/meetapp/actions';

import { Container } from './styles';
import ImageInput from './ImageInput';
import DatePicker from './DatePicker';

const schema = Yup.object().shape({
  title: Yup.string().required('O título é obrigatório!'),
  description: Yup.string().required('A descrição é obrigatória!'),
  location: Yup.string().required('A localização é obrigatória!'),
  date: Yup.date()
    .required()
    .typeError('Data inválida!'),
  image: Yup.number().required(),
});

export default function Profile() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(meetappCreateRequest(data));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <ImageInput name="image" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
