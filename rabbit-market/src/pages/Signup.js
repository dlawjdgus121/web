import React from 'react';

import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Button from '../elements/Button';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거

const Signup = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [nickname, setNickname] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [rePwd, setRePwd] = React.useState('');

  const checkId = () => {
    if (id === '') {
      alert('아이디를 입력해 주세요.');
      return;
    }
    dispatch(userActions.checkIdDB(id));
  };
  const _signUp = () => {
    if (id === '' || nickname === '' || pwd === '' || rePwd === '') {
      alert('빈칸을 다 채워주세요.');
      return;
    } else if (pwd !== rePwd) {
      alert('비밀번호와 비밀번호 확인이 서로 다릅니다. 다시 적어주세요.');
      return;
    }
    dispatch(userActions.registerDB(id, pwd, nickname));
  };

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
            _onChange={(e) => {
              setId(e.target.value);
            }}
          ></Input>
          <Button
            width="5rem"
            border_radius="2rem"
            _onClick={() => {
              checkId();
            }}
            is_disabled={useSelector((state) => state.user.is_check_id)}
          >
            중복확인
          </Button>
        </Grid>
        <Grid padding="0px 1rem">
          <Text
            size="0.5rem"
            is_hidden={useSelector((state) => state.user.is_check_id)}
          >
            아이디 중복체크를 해주세요 :)
          </Text>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="닉네임"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
            _onChange={(e) => {
              setNickname(e.target.value);
            }}
          ></Input>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="비밀번호"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          ></Input>
        </Grid>
        <Grid padding="0px 1rem">
          <Input
            placeholder="비밀번호 확인"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
            _onChange={(e) => {
              setRePwd(e.target.value);
            }}
          ></Input>
        </Grid>
        <Grid padding="5px 1rem">
          <Button
            border_radius="30px"
            _onClick={() => {
              _signUp();
            }}
            is_disabled={
              id === '' || nickname === '' || pwd === '' || rePwd === ''
            }
          >
            가입하기
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Signup;
