import React from 'react';
import { render } from 'react-dom';
import { Header } from './Components/Header/Header';
import { Post } from './Components/Post/Post';

import { App } from './Components/App/App';

import 'normalize.css';
import styles from './Components/base.css';

window.React = React;

render (
    <App />,
    document.getElementById('root')
)

