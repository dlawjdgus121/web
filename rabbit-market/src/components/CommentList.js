import React from 'react';
import { useSelector } from 'react-redux';

import Grid from '../elements/Grid';
import Text from '../elements/Text';

const CommentList = (props) => {
  // 해당 포스트의 댓글 정보
  const comments = useSelector((store) => store.post.comments);
  return (
    <React.Fragment>
      <Grid padding="2vh 0 0">
        {comments.map((comment) => {
          return <CommentItem key={comment.commentId} {...comment} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { nickname, comment, createdAt } = props;
  return (
    <Grid is_flex>
      <Grid width="10vw">
        <Text bold>{nickname}</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px">{comment}</Text>
        <Text margin="0px">{createdAt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  commentId: 'test123',
  comment: '좋은 상품이네요',
  postId: '123',
  nickname: '쇼핑하는 토끼',
  userId: 'user12345',
  createdAt: '2022-02-12T15:40:03.201Z',
  updatedAt: '2022-02-12T15:40:03.201Z',
};
