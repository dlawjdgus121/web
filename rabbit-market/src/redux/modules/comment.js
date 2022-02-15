import { createAction, handleActions } from 'redux-actions';
import { immerable, produce } from 'immer';
import axios from 'axios';

import { apis } from '../../shared/api';

const SET_COMMENT = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const ONE_POST = 'ONE_POST';

const setComment = createAction(SET_COMMENT, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_idx) => ({ post_idx }));
const getOnePost = createAction(ONE_POST, (post) => ({ post }));

const initialState = {
  list: [],
  post: [],
};

const initialPost = {
  postId: 'aalasdf',
  title: '아이폰 10',
  content: '아이폰 팔아요',
  price: 1000,
  imgurl: 'http://gi.esmplus.com/dodomae/NAR/Monami/pluspen3000.jpg',
  createdAt: '2022-02-22',
  updatedAt: '2022-02-25',
  nickname: 'fasdfasdf',
  userId: 'id',
  isSold: false,
};

//middleware

// 댓글 등록
const addCommentAPI = (postId, comment) => {
  return function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');

    apis
      .addComment(
        { postId, comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (res) {
        console.log(res);
        // setcomment 추가하기
      });
  };
};

//판매 상품 수정
const editPostAPI = () => {
  return async function (dispatch, useState, { history }) {};
};
//판매 상품 삭제
const deletePostAPI = () => {
  return async function (dispatch, useState, { history }) {};
};
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.post, '뭔데');
        draft.post = action.payload.post;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex((p) => p.id === action.payload.post_id);
        //우리가 뭔가 수정할 때 사진을 안바꾸고 게시글만 바꿀 수 있어서 스프레드로 처리
        draft.list[idx] = { ...draft.list[idx], ...action.payload.post };
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let deleted = draft.list.filter((e, i) => {
          return parseInt(action.payload.post_idx) !== i;
        });
        draft.list = deleted;
      }),
  },
  initialState
);

const actionCreators = {
  addCommentAPI,
};

export { actionCreators };
