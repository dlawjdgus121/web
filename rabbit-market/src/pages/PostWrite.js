import React from 'react';

// component import
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Input from '../elements/Input';

const PostWrite = (props) => {
  const [is_edit, setIsEdit] = React.useState(false);
  const [contents, setContent] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [title, setTitle] = React.useState('');

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeContents = (e) => {
    setContent(e.target.value);
  };

  const changeTitle = (e) => {
    setContent(e.target.value);
  };

  // 로그인 상태 체크
  if (false) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button _onClick={() => {}}>로그인하러 가기</Button>
      </Grid>
    );
  }
  // 글 쓰기 페이지
  return (
    <Grid padding="0 13vw">
      {/* 글 제목 */}
      <Grid padding="16px" is_flex border_bottom>
        <Text font=".7rem" bold>
          제목
        </Text>
        <Grid margin="2vw">
          <Input type="text" value={title} _onChange={changeTitle} />
        </Grid>

        <Text font=".7rem" bold>
          0/40
        </Text>
      </Grid>
      {/* 판매 가격 */}
      <Grid padding="16px" is_flex border_bottom>
        <Text font=".7rem" bold>
          가격
        </Text>
        <Grid margin="2vw">
          {/* 가격 */}
          <Input
            type="text"
            placeholder="숫자만 입력해주세요."
            value={price}
            _onChange={changePrice}
          />
        </Grid>
        <Grid>
          <Grid>
            <Text font=".7rem" bold>
              원
            </Text>
          </Grid>
        </Grid>
      </Grid>

      {/* 상품 이미지 */}
      <Grid padding="16px" is_flex border_bottom>
        <Grid width="20%">
          <Text font=".7rem" bold>
            상품 이미지
          </Text>
        </Grid>
        <Grid margin="2vw">
          <Input type="file" />
        </Grid>
        <Grid margin="2vw">
          <Image
            shape="rectangle"
            src={
              'https://w7.pngwing.com/pngs/767/518/png-transparent-color-vantablack-light-graphy-white-paper-blue-white-text-thumbnail.png'
            }
          />
        </Grid>
      </Grid>
      {/* 게시글 작성 */}
      <Grid padding="16px">
        <Input
          value={contents}
          _onChange={changeContents}
          label="설명"
          placeholder="상품 설명을 입력해주세요."
          multiLine
        ></Input>
      </Grid>

      <Grid padding="16px" is_right>
        {is_edit ? (
          <Button
            text="상품 수정하기"
            _onClick={console.log('게시글 수정 버튼 클릭')}
            disabled={contents === '' ? true : false}
          ></Button>
        ) : (
          <Button
            text="상품 등록하기"
            _onClick={console.log('게시글 작성 버튼 클릭')}
            disabled={contents === '' ? true : false}
          ></Button>
        )}
      </Grid>
    </Grid>
  );
};

export default PostWrite;
