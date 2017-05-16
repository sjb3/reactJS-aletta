'use strict';

import styled, { css } from 'styled-components';
import 'normalize.css';

export const Header_Style = styled.div`
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(left,rgba(255,0,0,0),rgba(255,0,0,1)); /*Safari 5.1-6*/
  background: -o-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /*Opera 11.1-12*/
  background: -moz-linear-gradient(right,rgba(255,0,0,0),rgba(255,0,0,1)); /*Fx 3.6-15*/
  background: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1)); /*Standard*/
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--site-width);
  margin: 0 auto;
`
export const Title = styled.div`
  color: grey;
  font-size: 3rem;
  font-style: italic;
  font-family: 'Shrikhand', cursive;
  padding: 2rem;

  }
`

export const List = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`
// export const List_Item = styled.div`

// `
export const List_Link = styled.div`
  color: white;
  font-weight: 2rem
  margin-left: 2rem

  &:focus
  &:hover {
    color: yellow
  }
`