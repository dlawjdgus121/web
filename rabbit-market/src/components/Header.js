import React from 'react';
import styled from 'styled-components';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Image from '../elements/Image';

import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  // const is_login = useSelector((state) => state.user.is_login);
  const is_tokken = localStorage.getItem('login-token') ? true : false;

  if (is_tokken) {
    return (
      <HeaderBox>
        <Grid is_flex is_header>
          {/* 로고 이미지 */}
          <Grid width="20%">
            <Image shape="logo" src={'/img/logo2.png'} />
          </Grid>
          {/* 검색창, 로그인 회원가입 버튼 */}
          <Grid is_flex width="75%">
            <Grid margin="0 15vw 0 0">
              <Input placeholder="상품명 입력" is_header />
            </Grid>
            <Grid is_flex width="40%">
              <Button
                text="내 정보"
                margin="0 2%"
                _onClick={() => {}}
                border_radius="2px"
              ></Button>
              <Button
                text="로그아웃"
                margin="0 2%"
                _onClick={() => {}}
                border_radius="2px"
              ></Button>
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
          <Grid width="20%">
            <Image shape="logo" src={'/img/logo2.png'} />
          </Grid>
          {/* 검색창, 로그인 회원가입 버튼 */}
          <Grid is_flex width="75%">
            <Grid margin="0 15vw 0 0">
              <Input placeholder="상품명 입력" is_header />
            </Grid>
            <Grid is_flex width="40%">
              <Button
                text="로그인"
                margin="0 2%"
                _onClick={() => {}}
                border_radius="2px"
              ></Button>
              <Button
                text="회원가입"
                margin="0 2%"
                _onClick={() => {}}
                border_radius="2px"
              ></Button>
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
