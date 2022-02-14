import React from 'react';

import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Permit from '../shared/Permit';

const PostDetail = (props) => {
  // 판매 상태 저장 state
  const [isSold, setIsSold] = React.useState(false);

  // 판매 상태 수정 함수
  function setState() {
    setIsSold(!isSold);
  }

  return (
    <Grid padding="0 13vw">
      {/* 판매 상품 이미지, 제목, 가격, 날짜, 판매 여부  */}
      <Grid is_flex border_bottom padding="2vh 0">
        <Image size="30" />

        <Grid width="57%">
          <Grid border_bottom>
            <Text size="2.5vw" bold>
              글제목은 20자까지
            </Text>
            <Text size="3vw" bold>
              100,000,000,000 원
            </Text>
          </Grid>
          <Text size="3vw" bold></Text>
          <Text size="1.5vw" is_end>
            2022.01.01
          </Text>
          <Text size="1.5vw" is_end>
            {isSold ? '판매 완료' : '판매중'}
          </Text>
        </Grid>
      </Grid>
      {/* 상품 정보 */}
      <Grid>
        <Text Text size="1.5vw" bold>
          상품 정보
        </Text>
        <Text Text size="1.5vw" is_contents>
          안녕하세요 이 상품은 뭘까?? 뭐지뭐지뭐지 줄 바꿈도 저장해야 하는데
          어떡하지 왜
        </Text>
      </Grid>
      <CommentWrite />
      <CommentList />
      <Permit>
        <Grid is_flex margin="10vh 0 0">
          <Grid width="10rem" padding="1px">
            <Button text="상품 삭제" _onClick={() => {}} border_radius="2px" />
          </Grid>
          <Grid is_flex width="20rem">
            <Grid padding="1px">
              <Button
                text="상품 수정"
                _onClick={() => {}}
                border_radius="2px"
              />
            </Grid>

            <Grid padding="1px">
              <Button
                text={isSold ? '판매 완료' : '판매중'}
                _onClick={() => {
                  setState();
                }}
                border_radius="2px"
              />
            </Grid>
          </Grid>
        </Grid>
      </Permit>
    </Grid>
  );
};

export default PostDetail;
