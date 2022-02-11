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
    <React.Fragment>
      <Grid padding="16px">
        <Text margin="0px" size="36px">
          {is_edit ? '게시글 수정' : '게시글 작성'}
        </Text>
        {/* <Upload /> */}
      </Grid>
      <Grid padding="16px">
        <Grid padding="16px">
          <Text margin="0px" size="24px" bold>
            미리보기
          </Text>
        </Grid>
        <Image
          shape="rectangle"
          src={
            'https://w7.pngwing.com/pngs/767/518/png-transparent-color-vantablack-light-graphy-white-paper-blue-white-text-thumbnail.png'
          }
        ></Image>
      </Grid>
      <Grid padding="16px">
        <Input
          value={contents}
          // _onChange={}
          label="게시글 내용"
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
    </React.Fragment>
  );
};

export default PostWrite;
