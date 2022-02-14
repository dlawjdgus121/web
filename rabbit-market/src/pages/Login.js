import React from 'react';
import Grid from '../elements/Grid';
import Input from '../elements/Input';
import Text from '../elements/Text';
import Button from '../elements/Button';

// redux import
import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const login = () => {
    dispatch(userActions.setLoginDB(id, pwd));
  };

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
            value={id}
            _onChange={(e) => {
              setId(e.target.value);
            }}
            placeholder="아이디"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>

        <Grid padding="0px 1rem">
          <Input
            value={pwd}
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
            placeholder="비밀번호"
            border="none"
            border_bottom="1px solid #6667ab"
            is_focus
          ></Input>
        </Grid>

        <Grid padding="5px 16px">
          <Button
            border_radius="30px"
            _onClick={() => {
              login();
            }}
          >
            로그인
          </Button>
        </Grid>
        <Grid
          margin="1.5rem 0px"
          padding="1rem 16px"
          border="1px solid #d3d3d3"
          center
        >
          <Text>아직 토끼장터 회원이 아니시라면?</Text>
          <Text is_deco>회원가입</Text>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
