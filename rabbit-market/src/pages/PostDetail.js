import React from 'react';

import CommentWrite from '../components/CommentWrite';
import CommentList from '../components/CommentList';
import Grid from '../elements/Grid';
import Image from '../elements/Image';
import Text from '../elements/Text';

const PostDetail = (props) => {
  return (
    <Grid padding="0 13vw">
      {/* 판매 상품 이미지, 제목, 가격, 날짜, 판매 여부  */}
      <Grid is_flex border_bottom padding="2vh 0">
        <Image size="30" />

        <Grid width="57%" margin="0 10vw">
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
            판매 완료
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
    </Grid>
  );
};

export default PostDetail;
