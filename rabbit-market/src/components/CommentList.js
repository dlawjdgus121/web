import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';
import { actionCreators as postActions } from '../redux/modules/post';

import { transformDate } from '../shared/transformDate';

const CommentList = (props) => {
  // 해당 포스트의 댓글 정보
  const comments = useSelector((store) => store.post.comments);
  const user = useSelector((store) => store.user.user);
  const uploading = useSelector((store) => store.user.uploading);

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!uploading) dispatch(userActions.checkLoginDB());
    return;
  }, []);

  return (
    <React.Fragment>
      <Grid padding="2vh 0 0">
        {comments.map((comment, idx) => {
          if (props.userId === comment.userId)
            return <CommentItem key={idx} {...comment} isMe />;
          else return <CommentItem key={idx} {...comment} />;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { nickname, comment, updatedAt, isMe, commentId } = props;
  const dispatch = useDispatch();

  const delcomment = () => {
    dispatch(postActions.delCommentAPI(commentId));
  };

  if (isMe)
    // 내가 쓴 댓글일 경우
    return (
      <Grid is_flex margin="1px 0">
        <Grid width="5rem">
          <Text bold>{nickname}</Text>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <Text margin="0px">{comment}</Text>
          <Text margin="0px">{transformDate(updatedAt)}</Text>
        </Grid>
        <Grid is_flex width="10rem" height="1.5rem">
          <Button text="수정" margin="1px" border_radius="1rem" />
          <Button
            text="삭제"
            margin="1px"
            border_radius="1rem"
            _onClick={() => {
              delcomment();
            }}
          />
        </Grid>
      </Grid>
    );
  else {
    // 다른 사람이 작성한 댓글일 경우
    return (
      <Grid is_flex>
        <Grid width="5rem">
          <Text bold>{nickname}</Text>
        </Grid>
        <Grid is_flex margin="0px 4px">
          <Text margin="0px">{comment}</Text>
          <Text margin="0px">{transformDate(updatedAt)}</Text>
        </Grid>
      </Grid>
    );
  }
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
