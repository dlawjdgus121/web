import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Button from '../elements/Button';

import { actionCreators as commentActions } from '../redux/modules/post';

import { useDispatch, useSelector } from 'react-redux';

const CommentWrite = (props) => {
  const [comment, setComment] = React.useState();
  const dispatch = useDispatch(null);

  const user = useSelector((state) => state.user);

  const _setComment = (e) => {
    setComment(e.target.value);
  };

  const writeComment = () => {
    dispatch(commentActions.addCommentAPI(props.postId, comment));
    setComment('');
  };

  return (
    <React.Fragment>
      <Grid is_flex padding="10vh 0 0">
        <Input
          placeholder="댓글 내용을 입력해주세요 :)"
          value={comment}
          _onChange={(e) => {
            _setComment(e);
          }}
        ></Input>
        <Button
          width="50px"
          margin="0px 2px"
          _onClick={() => {
            writeComment();
          }}
          border_radius="5px"
        >
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
