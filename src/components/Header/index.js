import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo.svg';

export default function Header() {
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
          <button type="button">Sair</button>
        </aside>
      </Content>
    </Container>
  );
}
