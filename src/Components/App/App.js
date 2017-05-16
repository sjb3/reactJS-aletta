import react from 'react';
import { render } from 'react-dom';

import 'normalize.css';
// import styles from './App.css';
import { Header }from '../Header/Header.js';
import { Post } from '../Post/Post.js';
import { Div_Class } from './App.style.js';

export const App = () => (
  <div>
    <Header />
    <Div_Class>
      <Post />
      <Post />
      <Post />
    </Div_Class>
  </div>
)