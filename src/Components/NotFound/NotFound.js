'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Header } from '../Header/Header';
import 'normalize.css';

export const NotFound = () => (
  <div>
  <Header />
  <h1 style={{fontFamily: 'impact', fontStyle:"italic", color: "red", fontSize: 100}}>404 <br /> NOT FOUND</h1>
  </div>
)