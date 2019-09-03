import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, ButtonContainer, DetailMeetup } from './styles';

import history from '~/services/history';

import {
  meetappCancelRequest,
  meetappEditRequest,
} from '~/store/modules/meetapp/actions';

export default function Details({ match }) {
  const dispatch = useDispatch();
  const { meetupPreview } = useSelector(state => state.meetapp);

  function handleCancel(meetup) {
    const confirm = window.confirm('Deseja cancelar este meetapp?');

    if (!confirm) return;

    dispatch(meetappCancelRequest(meetup));
  }

  return (
    <Container>
      <header>
        <h2>Meus meetups</h2>
        <ButtonContainer>
          <button
            onClick={() => dispatch(meetappEditRequest(meetupPreview))}
            id="edit"
            type="button"
          >
            Editar
          </button>
          <button
            id="cancel"
            type="button"
            onClick={() => handleCancel(meetupPreview)}
          >
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
