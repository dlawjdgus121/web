import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
  const {
    is_flex,
    width,
    padding,
    margin,
    bg,
    children,
    center,
    _onClick,
    is_header,
    border,
    border_bottom,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    is_header: is_header,
    border: border,
    border_bottom: border_bottom,
  };

  if (is_header) {
    return <HeaderBox>{children}</HeaderBox>;
  }

  return (
    <GridBox {...styles} onClick={_onClick}>
      {children}
    </GridBox>
  );
};

Grid.defaultProps = {
  children: null,
  is_flex: false,
  width: '100%',
  padding: false,
  margin: false,
  bg: false,
  center: false,
  is_header: false,
  _onClick: () => {},
  border: null,
  border_bottom: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  //넓이에 보더 굵기 같은 것도 포함할래? yes
  box-sizing: border-box;
  ${(props) => (props.width ? `width:${props.width};` : '')}
  ${(props) => (props.padding ? `padding:${props.padding};` : '')}
  ${(props) => (props.margin ? `margin:${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color:${props.bg};` : '')}
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content:space-between;`
      : ''}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) => (props.border ? `border: 2px solid rgb(200, 200, 200);` : '')}
  ${(props) =>
    props.border_bottom
      ? `border-bottom: 1px solid rgb(200, 200, 200);`
      : ''} /* 이따가 물어보기 */
  /* ${(props) =>
    props.border_bottom ? `border-bottom:${props.border_bottom};` : ''} */
`;

const HeaderBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  /* gap: 1.5rem; */
`;

export default Grid;
