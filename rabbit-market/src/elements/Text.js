import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const { bold, color, size, margin, is_end, is_contents, children } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    is_end: is_end,
    is_contents: is_contents,
  };
  return <P {...styles}>{children}</P>;
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '1vw',
  margin: false,
  is_end: false,
  is_contents: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
  ${(props) => (props.is_end ? `text-align: end;` : '')}
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${(props) =>
    props.is_contents ? 'word-break: break-all; white-space: nowrap;' : ''}
`;
export default Text;
