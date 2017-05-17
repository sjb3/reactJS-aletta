import react from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import { Header }from '../Header/Header.js';
import { Post } from '../Post/Post.js';
import { About } from '../About/About.js';
import { Home } from '../Home/Home';
import { NotFound } from '../NotFound/NotFound.js';
import { PostDetails } from '../PostDetails/PostDetails';
import posts from 'json-loader!../../../blog-posts.json';

import { Div_Class } from './App.style.js';

import 'normalize.css';

export const App = () => (
  <Router history={hashHistory}>
  <div>
    <Header />
    <Div_Class>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/post" component={Post} />
      <Route path="/post/:slug" component={ props => {
        const post = posts.posts.filter( post => props.params.slug === post.slug )
        return <PostDetails post={post[0]} />
      }} />

      <Route path="/home" component={Home} />
      <Route path="*" component={NotFound} />
    </Div_Class>
  </div>
  </Router>
)