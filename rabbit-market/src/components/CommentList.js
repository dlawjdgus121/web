import React from 'react';

import Grid from '../elements/Grid';
import Text from '../elements/Text';

const CommentList = (props) => {
  console.log(props);
  return (
    <React.Fragment>
      <Grid padding="2vh 0 0">
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  // console.log(props);
  const { user_name, contents, insert_dt } = props;
  return (
    <Grid is_flex>
      <Grid width="10vw">
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin="0px 4px">
        <Text margin="0px">{contents}</Text>
        <Text margin="0px">{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: '',
  user_name: 'jun',
  user_id: '',
  contents: '석양이 예쁘네요',
  post_id: 1,
  insert_dt: '2022-01-01 19:00:00',
};
