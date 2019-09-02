import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import history from '~/services/history';

import {
  meetappIndexRequest,
  meetappView,
} from '~/store/modules/meetapp/actions';

import { Container, MeetupContainer, Meetup, Title, Time } from './styles';

export default function Dashboard() {
  const dispatch = useDispatch();
  const { meetups } = useSelector(state => state.meetapp);

  function handleNavigation(id) {
    dispatch(meetappView(id));
    history.push(`/details/${id}`);
  }

  useEffect(() => {
    dispatch(meetappIndexRequest());
  }, []); //eslint-disable-line

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <button onClick={() => history.push('/newedit')} type="button">
          Novo meetup
        </button>
      </header>
      <MeetupContainer>
        {meetups.map(meetup => (
          <Meetup key={meetup.id} onClick={() => handleNavigation(meetup.id)}>
            <Title>{meetup.title}</Title>
            <Time>
              {format(
                parseISO(meetup.date),
                "dd 'de' MMMM 'de' yyyy, 'às' HH:mm",
                {
                  locale: pt,
                }
              )}
            </Time>
          </Meetup>
        ))}
      </MeetupContainer>
    </Container>
  );
}
