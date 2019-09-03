import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  meetappCreateRequest,
  meetappUpdateRequest,
} from '~/store/modules/meetapp/actions';

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
  image: Yup.number().required('A imagem é obrigatória'),
});

export default function Profile() {
  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetapp.meetupEdit);

  function handleSubmit(data) {
    if (meetup) {
      const update = {
        id: meetup.id,
        ...data,
      };

      dispatch(meetappUpdateRequest(update));
    } else {
      dispatch(meetappCreateRequest(data));
    }
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={meetup ? meetup : null}
      >
        <ImageInput name="image" />
        <Input name="title" placeholder="Título do Meetup" />
        <Input multiline name="description" placeholder="Descrição completa" />
        <DatePicker name="date" autoComplete={false} />
        <Input name="location" placeholder="Localização" />

        <button type="submit">Salvar meetup</button>
      </Form>
    </Container>
  );
}
