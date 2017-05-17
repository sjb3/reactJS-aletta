'use strict';

import React from 'react';
import { render } from 'react-dom';

import { Post } from '../Post/Post';
import { Header } from '../Header/Header';
import posts from 'json-loader!../../../blog-posts.json';

export const Home = () => (
  <div>
    <Header />
    {posts.posts.map(post => <Post {...post} key={post.slug}/>)}
  </div>
)