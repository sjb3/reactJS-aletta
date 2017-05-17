'use strict';

import React from 'react';
import { Post } from '../Post/Post';

export const PostDeails = (props) => (
  <div>
    <Post {...props.post} />
  </div>
)