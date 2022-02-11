import React from 'react';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import Input from '../elements/Input';
import Image from '../elements/Image';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderBox>
      <Grid is_flex padding="4px 16px" is_header>
        <Grid width="25%" margin="1rem">
          <Image shape="logo" src={'/img/logo2.png'} />
        </Grid>
        <Grid is_flex>
          <Input placeholder="상품명 입력" is_header />
          <Grid width="40%" is_flex>
            <Button
              text="로그인"
              margin="1%"
              _onClick={() => {}}
              border_radius="2px"
            ></Button>
            <Button
              text="회원가입"
              margin="1%"
              _onClick={() => {}}
              border_radius="2px"
            ></Button>
          </Grid>
        </Grid>
      </Grid>
    </HeaderBox>
  );
};

const HeaderBox = styled.div`
  background-color: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export default Header;
