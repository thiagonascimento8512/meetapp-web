import React from 'react';

import history from '~/services/history';

import { Container, MeetupContainer, Meetup, Title, Time } from './styles';

export default function Dashboard() {
  function handleNavigation() {
    history.push('/details');
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <button onClick={() => history.push('/newedit')} type="button">
          Novo meetup
        </button>
      </header>
      <MeetupContainer>
        <Meetup onClick={handleNavigation}>
          <Title>Meetup de React Native</Title>
          <Time>24 de Junho, às 20h</Time>
        </Meetup>
        <Meetup>
          <Title>NodeJS Meetup </Title>
          <Time>17 de Junho, às 13h</Time>
        </Meetup>
        <Meetup>
          <Title>Rockeseat Meetup</Title>
          <Time>30 de Agosto, às 20h</Time>
        </Meetup>
        <Meetup>
          <Title>React on the house!</Title>
          <Time>17 de Novembro, às 16h</Time>
        </Meetup>
      </MeetupContainer>
    </Container>
  );
}
