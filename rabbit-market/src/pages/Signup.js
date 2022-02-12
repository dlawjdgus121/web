import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Button from '../elements/Button';

const Signup = () => {
  return (
    <>
      <Grid width="28rem" margin="auto" padding="3rem 1rem">
        <Grid padding="16px" center>
          <Text size="2rem" bold>
            회원가입
          </Text>
        </Grid>
        <Grid is_flex padding="0px 1rem">
          <Input
            placeholder="아이디"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
          <Button width="5rem" border_radius="2rem">
            중복확인
          </Button>
        </Grid>
        <Grid padding="0px 1rem">
          <Text size="0.5rem">아이디 중복체크를 해주세요 :)</Text>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="닉네임"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="비밀번호"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="비밀번호 확인"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid padding="5px 1rem">
          <Button border_radius="30px">가입하기</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
