'use strict';

import React from 'react';
import { H2_Style, Content } from './Post.style.js';
import { Link } from 'react-router';

// import styles from './Post.css';

export const Post = (props) => (
  <div>
    <Link to={`/post/${props.slug}`}><H2_Style>{props.title}</H2_Style></Link>
    <Content>
      {props.excerpt}
    </Content>
  </div>
)

/*import React from 'react';

import styles from './Post.css';

export const Post = () => (
  <div>
    <h2 className={styles.title}>Blog Post</h2>
    <p className={styles.content}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
)*/

