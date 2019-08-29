import React from 'react';

import { Container, ButtonContainer, DetailMeetup } from './styles';

import history from '~/services/history';

import image from '~/assets/meetup-example.jpg';

export default function Details() {
  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <ButtonContainer>
          <button
            onClick={() => history.push('/newedit')}
            id="edit"
            type="button"
          >
            Editar
          </button>
          <button id="cancel" type="button">
            Cancelar
          </button>
        </ButtonContainer>
      </header>

      <DetailMeetup>
        <img src={image} alt="Meetup" />
        <p>
          O Meetup de React Native é um evento que reúne a comunidade de
          desenvolvimento mobile utilizando React a fim de compartilhar
          conhecimento. Todos são convidados. Caso queira participar como
          palestrante do meetup envie um e-mail para
          organizacao@meetuprn.com.br.
        </p>
        <div>
          <time>24 de Junho, às 20h</time>
          <span>Rua Guilherme Gembala, 260</span>
        </div>
      </DetailMeetup>
    </Container>
  );
}
