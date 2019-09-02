import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, ButtonContainer, DetailMeetup } from './styles';

import history from '~/services/history';

export default function Details({ match }) {
  const { meetupPreview } = useSelector(state => state.meetapp);

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <ButtonContainer>
          <button
            onClick={() => history.push(`/newedit/${match.params.id}`)}
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

      {meetupPreview ? (
        <DetailMeetup>
          <img src={meetupPreview.banner.url} alt="Banner" />
          <p>{meetupPreview.description}</p>
          <div>
            <time>
              {format(
                parseISO(meetupPreview.date),
                "dd 'de' MMMM 'de' yyyy, 'às' HH:mm",
                {
                  locale: pt,
                }
              )}
            </time>
            <span>{meetupPreview.location}</span>
          </div>
        </DetailMeetup>
      ) : (
        history.push('/dashboard')
      )}
    </Container>
  );
}
