import React from 'react';
import Grid from '../elements/Grid';
import Post from '../components/Post';
import Image from '../elements/Image';
import Text from '../elements/Text';

import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    if (post_list.length === 0) {
      dispatch(postActions.getPostAPI());
    }
  }, []);
  return (
    <>
      <Grid height="10%">
        <img
          src="https://user-images.githubusercontent.com/82128525/153698807-45fde35c-0ce8-499b-864b-14d6b439968d.jpeg"
          alt="나이키 이미지"
          style={{ height: '20rem', width: '100%' }}
        />
      </Grid>
      <Grid padding="2vw 13vw 0vw 13vw">
        <Text size="2rem">상품들이 깡충깡충</Text>
      </Grid>
      <Post></Post>
    </>
  );
};

export default Main;
