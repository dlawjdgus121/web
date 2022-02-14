import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Image from '../elements/Image';
import Button from '../elements/Button';

import { useSelector } from 'react-redux';

const Post = (props) => {
  console.log('Post.js prps :', props);
  return (
    <>
      <Grid width="30%" margin="0.5rem  0.5rem">
        <Image></Image>
        <Text bold size="1rem">
          상품명 :
        </Text>
        <Text size=".9rem">가격 :</Text>
        <Text size=".7rem">작성시간 : </Text>
      </Grid>
    </>
  );
};

export default Post;
