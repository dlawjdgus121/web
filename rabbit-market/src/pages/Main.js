import React from 'react';
import Grid from '../elements/Grid';
import Post from '../components/Post';

const Main = () => {
  return (
    <React.Fragment>
      <Grid bg={'#EFF6FF'} padding="20px 0px">
        {/* <Post /> */}

        <Grid bg="#ffffff" margin="8px 0px" _onClick={() => {}}>
          <Post is_me />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Main;
