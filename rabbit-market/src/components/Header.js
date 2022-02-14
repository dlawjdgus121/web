import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Image from '../elements/Image';

import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user'; // as : 별명 주는거

// 페이지 이동
import { history } from '../redux/configureStore';

const Header = () => {
  const dispatch = useDispatch();

  const is_token = localStorage.getItem('login-token') ? true : false;

  // 로그인 체크
  const isLogin = useSelector((state) => state.user.is_login);

  React.useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

  React.useEffect(() => {}, []);
  // 상태 변환일때만

  if (is_token) {
    return (
      <HeaderBox>
        <Grid is_flex is_header>
          {/* 로고 이미지 */}
          <Grid
            width="20rem"
            _onClick={() => {
              history.push('/');
            }}
          >
            <Image shape="logo" src={'/img/logo2.png'} />
          </Grid>
          {/* 검색창, 로그인 회원가입 버튼 */}
          <Grid margin="0 5vh" margin="0 1vw">
            <Input placeholder="상품명 입력" is_header />
          </Grid>
          <Grid is_flex width="30rem">
            <Grid>
              <Button
                text="내 정보"
                margin="0 1px"
                _onClick={() => {}}
                border_radius="2px"
              />
            </Grid>
            <Grid>
              <Button
                text="로그아웃"
                margin="0 2px"
                _onClick={() => {
                  dispatch(userActions.logoutDB());
                }}
                border_radius="2px"
              />
            </Grid>
          </Grid>
        </Grid>
      </HeaderBox>
    );
  } else {
    return (
      <HeaderBox>
        <Grid is_flex is_header>
          {/* 로고 이미지 */}
          <Grid
            width="20rem"
            _onClick={() => {
              history.push('/');
            }}
          >
            <Image shape="logo" src={'/img/logo2.png'} />
          </Grid>
          {/* 검색창, 로그인 회원가입 버튼 */}
          <Grid margin="0 5vh" margin="0 1vw">
            <Input placeholder="상품명 입력" is_header />
          </Grid>
          <Grid is_flex width="30rem">
            <Grid>
              <Button
                text="로그인"
                margin="0 1px"
                _onClick={() => {
                  history.push('/login');
                }}
                border_radius="2px"
              />
            </Grid>
            <Grid>
              <Button
                text="회원가입"
                margin="0 2px"
                _onClick={() => {
                  history.push('/signup');
                }}
                border_radius="2px"
              />
            </Grid>
          </Grid>
        </Grid>
      </HeaderBox>
    );
  }
};

const HeaderBox = styled.div`
  background-color: #fff;
  width: 100%;
  min-width: 375px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  padding: 0 13vw;
`;

export default Header;
