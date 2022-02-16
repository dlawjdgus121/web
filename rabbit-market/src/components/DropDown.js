import React from 'react';
import styled from 'styled-components';
import { history } from '../redux/configureStore';

const DropDown = (props) => {
  const [choice, setChoice] = React.useState('전체보기');
  return (
    <>
      <Ul>
        {choice}
        <Li onClick={() => setChoice('전체보기')}>전체보기</Li>
        <Li onClick={() => setChoice('판매중')}>판매중</Li>
        <Li onClick={() => setChoice('판매완료')}>판매완료</Li>
      </Ul>
    </>
  );
};

const Ul = styled.ul`
  z-index: 999;

  padding: 0;
  text-align: center;
  background: #fff;
  color: black;
  line-height: 50px;
  margin: auto;
  border-radius: 10px;

  &:hover {
    Li {
      display: block;
      border-bottom: 1px solid #999;
    }
  }
`;

const Li = styled.li`
  display: none;
`;

export default DropDown;
