import React from 'react';
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Input from '../elements/Input';

const PostWrite = (props) => {
  const [is_edit, setIsEdit] = React.useState(false);
  const [contents, setContent] = React.useState('');

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
    <Grid border padding="2rem">
      <Grid padding="16px" is_flex>
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
      <Grid padding="16px">
        <Input
          value={contents}
          // _onChange={}
          label="설명"
          placeholder="게시글 작성"
          multiLine
        ></Input>
      </Grid>

      <Grid padding="16px">
        {is_edit ? (
          <Button
            text="게시글 수정"
            _onClick={console.log('게시글 수정 버튼 클릭')}
            disabled={contents === '' ? true : false}
          ></Button>
        ) : (
          <Button
            text="게시글 작성"
            _onClick={console.log('게시글 작성 버튼 클릭')}
            disabled={contents === '' ? true : false}
          ></Button>
        )}
      </Grid>
    </Grid>
  );
};

export default PostWrite;
