import React from 'react';
import { useDispatch } from 'react-redux';

import { history } from '../redux/configureStore';

// component import
import Grid from '../elements/Grid';
import Text from '../elements/Text';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Input from '../elements/Input';

import { actionCreators as postActions } from '../redux/modules/post';

const PostWrite = (props) => {
  const is_token = localStorage.getItem('login-token') ? true : false;
  const dispatch = useDispatch(null);

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
    setTitle(e.target.value);
  };

  const addPost = () => {
    dispatch(
      postActions.addPostAPI(
        title,
        price,
        'https://user-images.githubusercontent.com/82128525/153698807-45fde35c-0ce8-499b-864b-14d6b439968d.jpeg',
        contents
      )
    );
  };

  // 로그인 상태 체크
  if (!is_token) {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace('/login');
          }}
        >
          로그인하러 가기
        </Button>
      </Grid>
    );
  }
  // 글 쓰기 페이지
  return (
    <Grid padding="0 13vw">
      {/* 글 제목 */}
      <Grid padding="16px" is_flex border_bottom>
        <Grid width="6rem">
          <Text font=".7rem" bold>
            제목
          </Text>
        </Grid>

        <Grid margin="2vw">
          <Input type="text" value={title} _onChange={changeTitle} />
        </Grid>
        <Grid width="6rem">
          <Text font=".7rem" bold>
            0/40
          </Text>
        </Grid>
      </Grid>
      {/* 판매 가격 */}
      <Grid padding="16px" only_flex border_bottom>
        <Grid is_flex width="50%">
          <Grid width="6rem">
            <Text font=".7rem" bold>
              가격
            </Text>
          </Grid>

          <Grid margin="2vw">
            <Input
              type="number"
              placeholder="숫자만 입력해주세요."
              value={price}
              _onChange={changePrice}
            />
          </Grid>
        </Grid>

        <Grid width="6rem">
          <Text font=".7rem" bold>
            원
          </Text>
        </Grid>
      </Grid>

      {/* 상품 이미지 */}
      <Grid padding="16px" is_flex border_bottom>
        <Grid width="13rem">
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
            _onClick={() => {
              addPost();
            }}
            // disabled={contents === '' ? true : false}
          ></Button>
        )}
      </Grid>
    </Grid>
  );
};

export default PostWrite;
