import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Meetapp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Thiago Nascimento</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
          </Profile>
          <button type="button" onClick={() => dispatch(signOut())}>
            Sair
          </button>
        </aside>
      </Content>
    </Container>
  );
}
