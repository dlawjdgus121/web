import React from 'react';
import styled from 'styled-components';

import Text from './Text';
import Grid from './Grid';
const Input = (props) => {
  const {
    label,
    placeholder,
    _onChange,
    type,
    multiLine,
    value,
    border,
    border_radius,
    is_header,
  } = props;

  if (is_header) {
    return (
      <HeaderInput
        type={type}
        placeholder={placeholder}
        onChange={_onChange}
        border={border}
        border_radius={border_radius}
      ></HeaderInput>
    );
  }

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
          border={border}
          border_radius={border_radius}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElInput
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          border={border}
          border_radius={border_radius}
        />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: '텍스트를 입력해주세요.',
  type: 'text',
  border: false,
  border_radius: false,
  value: '',
  _onChange: () => {},
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  margin: 5px 0px;
  box-sizing: border-box;
  ${(props) => (props.border ? `border:${props.border};` : '')}
  ${(props) =>
    props.border_radius ? `border-radius:${props.border_radius};` : ''}
`;
const ElInput = styled.input`
  border: 1px solid #212121;
  width: 100%;
  padding: 12px 4px;
  margin: 5px 0px;
  box-sizing: border-box;
  ${(props) => (props.border ? `border:${props.border};` : '')}
  ${(props) =>
    props.border_radius ? `border-radius:${props.border_radius};` : ''}
`;

const HeaderInput = styled.input`
  border: 1px solid #212121;
  width: 40%;
  padding: 12px 4px;
  margin: 5px 0px;
  box-sizing: border-box;
  ${(props) => (props.border ? `border:${props.border};` : '')}
  ${(props) =>
    props.border_radius ? `border-radius:${props.border_radius};` : ''}
  border: 0.3rem solid #6667ab;
`;

export default Input;
