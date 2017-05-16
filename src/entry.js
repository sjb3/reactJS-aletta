import React from 'react';
import { render } from 'react-dom';
import { Header } from './Components/Header/Header';

// import routes from './routes';
import 'normalize.css';
import './Components/base.css';

window.React = React;

render (
    <Header />,
    document.getElementById('root')
)

