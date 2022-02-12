import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Button from '../elements/Button';

const CommentWrite = () => {
  return (
    <React.Fragment>
      <Grid is_flex padding="10vh 0 0">
        <Input placeholder="댓글 내용을 입력해주세요 :)"></Input>
        <Button width="50px" margin="0px 2px 0px 2px">
          작성
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default CommentWrite;
