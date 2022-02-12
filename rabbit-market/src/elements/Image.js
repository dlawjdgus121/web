import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
  const { shape, src, size } = props;
  //스타일만 모아주기
  const styles = {
    src: src,
    size: size,
  };
  //만약 모양이 원이면 서클을 적용해 주세용
  if (shape === 'logo') {
    return <Logo {...styles}></Logo>;
  }
  if (shape === 'rectangle') {
    return (
      <AspectOuter size={size}>
        <AspectInner {...styles}></AspectInner>
      </AspectOuter>
    );
  }
  return <React.Fragment></React.Fragment>;
};

Image.defaultProps = {
  shape: 'rectangle',
  src: 'https://s1.best-wallpaper.net/wallpaper/m/1812/Portugal-Porto-river-bridge-city-morning_m.jpg',
  size: 36,
};
const AspectOuter = styled.div`
  width: 100%;
  min-width: 20vw;
  --size: ${(props) => props.size}vw;
  width: var(--size);
  height: var(--size);
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  object-fit: fill;
  --size: ${(props) => props.size}vw;
  width: var(--size);
  height: var(--size);
`;

//원의 형태 잡아주기
const Logo = styled.div`
  height: 50px;
  background-image: url('${(props) => props.src}');
  background-size: contain; // 이미지 잘리기 방지
  background-repeat: no-repeat; // 이미지 반복 방지
  margin: 4px;
  background-position: center;
`;

export default Image;
