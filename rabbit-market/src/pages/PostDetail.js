import React from 'react';

import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import Post from '../components/Post';

const PostDetail = (props) => {
  return (
    <React.Fragment>
      <Post is_me />
      <CommentWrite />
      <CommentList />
    </React.Fragment>
  );
};

export default PostDetail;
