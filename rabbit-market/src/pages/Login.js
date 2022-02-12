import React from 'react';
import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Button from '../elements/Button';

const Login = () => {
  return (
    <>
      <Grid width="28rem" margin="auto" padding="3rem 1rem">
        <Grid padding="16px" center>
          <Text size="2rem" bold>
            로그인
          </Text>
        </Grid>
        <Grid is_flex padding="0px 1rem">
          <Input
            placeholder="아이디"
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

        <Grid padding="5px 16px">
          <Button border_radius="30px">가입하기</Button>
        </Grid>
        <Grid
          margin="1.5rem 0px"
          padding="1rem 16px"
          border="1px solid #d3d3d3"
          center
        >
          <Text>
            아직 토끼장터 회원이 아니시라면?{' '}
            <a href="http://www.naver.com">회원가입</a>
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
