import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Button from '../elements/Button';

import { actionCreators as commentActions } from '../redux/modules/comment';
import { useDispatch } from 'react-redux';

const CommentWrite = (props) => {
  const [comment, setComment] = React.useState();
  const dispatch = useDispatch(null);

  const _setComment = (e) => {
    setComment(e.target.value);
  };

  const writeComment = () => {
    dispatch(commentActions.addCommentAPI(props.postId, comment));
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
          margin="0px 2px 0px 2px"
          _onClick={() => {
            writeComment();
          }}
        >
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
