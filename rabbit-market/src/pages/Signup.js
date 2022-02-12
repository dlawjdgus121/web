import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Image from '../elements/Image';

import { FaUserAlt } from 'react-icons/fa';

const Signup = () => {
  return (
    <>
      <Grid width="80vw" margin="auto">
        <Grid padding="16px" center>
          <Text size="2rem" bold>
            토끼 장터
          </Text>
        </Grid>
        <Grid is_flex>
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
        <Grid>
          <Text size="0.5rem">아이디 중복체크를 해주세요 :)</Text>
        </Grid>
        <Grid>
          <Input
            placeholder="닉네임"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid>
          <Input
            placeholder="비밀번호"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid>
          <Input
            placeholder="비밀번호 확인"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>
        <Grid padding="5px 16px">
          <Button border_radius="30px">가입하기</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
