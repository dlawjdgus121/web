import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Image from '../elements/Image';
import Button from '../elements/Button';

import { history } from '../redux/configureStore';

import { useSelector } from 'react-redux';

const Post = (props) => {
  return (
    <>
      <Grid width="30%" margin="0.5rem  0.5rem">
        <Image src={props.imgurl}></Image>
        <Text bold size="1rem">
          상품명 : {props.title}
        </Text>
        <Text size=".9rem">가격 : {props.price}</Text>
        <Text size=".7rem">작성시간 : {props.createdAt}</Text>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  title: '타이틀',
  price: 122222,
  nickname: '닉네임',
  imgurl:
    'https://s1.best-wallpaper.net/wallpaper/m/1812/Portugal-Porto-river-bridge-city-morning_m.jpg',
  content: '컨텐트',
  comment_cnt: 10,
  createdAt: '2022-02-04 10:00:00',
  is_me: false,
  isSold: false,
};

export default Post;
