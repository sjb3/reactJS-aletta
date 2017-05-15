'use strict';

import React from 'react';
import { Header_Style, Container, Title, List  } from './Header.style.js';

export const Header = () => (
  <Header_Style>

    <Container>
      <Title>Aletta</Title>
      <nav>
        <List>
          {/*<li><a style={{ color: 'white',
                          fontSize: '1.5rem',
                          marginLeft: 10,
                          marginRight: 10,
                          textTransform: 'uppercase', }} href="#">Posts</a></li>
          <li><a style={{ color: 'white',
                          fontSize: '1.5rem',
                          marginLeft: 10,
                          marginRight: 10,
                          textTransform: 'uppercase' }} href="#">About</a></li>*/}
        </List>
      </nav>
    </Container>
  </Header_Style>
)

// export default Header
