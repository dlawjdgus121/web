import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Image from '../elements/Image';
import Button from '../elements/Button';

const Post = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding="16px">
          <Grid is_flex width="auto">
            <Image shape="circle"></Image>
            <Text bold>유저 닉네임</Text>
          </Grid>
          <Grid is_flex width="auto">
            <Text>2022.02.02</Text>
            {props.is_me && (
              <Button
                width="50px"
                margin="5px"
                text="수정"
                padding="4px"
                _onClick={() => {}}
              ></Button>
            )}
            {props.is_me && (
              <Button
                width="50px"
                text="삭제"
                padding="4px"
                _onClick={() => {}}
              ></Button>
            )}
          </Grid>
        </Grid>

        <Grid padding="16px" is_flex>
          <Text>내용 내용</Text>
        </Grid>

        <Grid padding="16px">
          <Image shape="rectangle"></Image>
        </Grid>

        <Grid padding="16px">
          <Text margin="0px" bold size="20">
            댓글 0개
          </Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Post;
