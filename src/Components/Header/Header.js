'use strict';

import React from 'react';
import { Header_Style, Container, Title, List, List_Link  } from './Header.style.js';

export const Header = () => (
  <Header_Style>
    <Container>
      <Title>Aletta</Title>
      <nav>
        <List>
          {/*<li><a style={{
                  primary: { color: 'white',
                        fontSize: '2.5rem',
                        marginLeft: 10,
                        marginRight: 10,
                  },
                  hover: { color: 'yellow',
                        fontSize: '2rem',
                        marginLeft: 10,
                        marginRight: 10,
                  },
                  active: { color: 'black',
                        fontSize: '2rem',
                        marginLeft: 10,
                        marginRight: 10,
                  }
                        }} href="#">Posts</a></li>

          <li><a style={{
                  primary: { color: 'white',
                        fontSize: '2.5rem',
                        marginLeft: 10,
                        marginRight: 10,
                  },
                  hover: { color: 'yellow',
                        fontSize: '2rem',
                        marginLeft: 10,
                        marginRight: 10,
                  },
                  active: { color: 'black',
                        fontSize: '2rem',
                        marginLeft: 10,
                        marginRight: 10,
                  }
                        }} href="#">About]</a></li>*/}


          <li><a style={{color: 'white',
                        fontSize: '2rem',
                        fontFamily: 'impact',
                        marginLeft: 2,
                        }} href="#">POSTS</a></li>
          <li><a style={{color: 'white',
                        fontSize: '2rem',
                        fontFamily: 'impact',
                        marginLeft: 2,
                        }} href="#">ABOUT</a></li>
        </List>
      </nav>
    </Container>
  </Header_Style>
)

