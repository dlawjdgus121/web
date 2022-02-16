import React from 'react';
import Grid from '../elements/Grid';
import Post from '../components/Post';
import Image from '../elements/Image';
import Button from '../elements/Button';

import Text from '../elements/Text';

import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);

  const [cnt, setCnt] = React.useState(0);

  const { history } = props;

  React.useEffect(() => {
    // if (post_list.length === 0) {
    dispatch(postActions.getPostAPI());
    // }
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

      <Grid padding="2vw 13vw 0vw 13vw" is_grid is_wrap>
        {post_list.map((p, idx) => {
          return (
            <Grid
              key={p.id}
              width="100%"
              min_width="8.7rem"
              margin="0.5rem 0"
              _onClick={() => {
                history.push(`/post/${p.id}`);
              }}
            >
              <Post key={p.id} {...p}></Post>
            </Grid>
          );
        })}
      </Grid>
      <Button
        is_float
        text="+"
        _onClick={() => {
          history.push('/write');
        }}
      ></Button>
    </>
  );
};

export default Main;
