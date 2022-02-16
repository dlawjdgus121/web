import React from 'react';
import Grid from '../elements/Grid';
import Post from '../components/Post';
import Button from '../elements/Button';
import Text from '../elements/Text';
import ControlledCarousel from '../components/ControlledCarousel';

import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const Main = (props) => {
  const dispatch = useDispatch();

  const post_list = useSelector((state) => state.post.list);

  const { history } = props;

  React.useEffect(() => {
    // if (post_list.length === 0) {
    dispatch(postActions.getPostAPI());
    // }
  }, []);

  return (
    <>
      <ControlledCarousel />

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
              border
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
