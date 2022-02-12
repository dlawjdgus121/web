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
    border,
    border_bottom,
    _onClick,
  } = props;

  const styles = {
    is_flex: is_flex,
    width: width,
    margin: margin,
    padding: padding,
    bg: bg,
    center: center,
    border_bottom: border_bottom,
    border: border,
  };
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>
        {children}
      </GridBox>
    </React.Fragment>
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
  _onClick: () => {},
  border: false,
  border_bottom: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  //넓이에 보더 굵기 같은 것도 포함할래? yes
  box-sizing: border-box;
  ${(props) => (props.border ? `border:${props.border};` : '')}
  ${(props) => (props.width ? `width:${props.width};` : '')}
  ${(props) => (props.padding ? `padding:${props.padding};` : '')}
  ${(props) => (props.margin ? `margin:${props.margin};` : '')}
  ${(props) => (props.bg ? `background-color:${props.bg};` : '')}
  ${(props) =>
    props.is_flex
      ? `display:flex; align-items: center; justify-content:space-between`
      : ''}
  ${(props) => (props.center ? `text-align: center;` : '')}
  ${(props) =>
    props.border_bottom ? `border-bottom:${props.border_bottom};` : ''}
`;
export default Grid;
