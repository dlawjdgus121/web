import { createAction, handleActions } from 'redux-actions';
import { immerable, produce } from 'immer';
import axios from 'axios';

const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_idx) => ({ post_idx }));

const initialState = {
  list: [],
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

//전체 상품 조회
const getPostAPI = () => {
  return async function (dispatch, useState, { history }) {
    await axios.get('http://52.79.160.167/api/posts').then(function (res) {
      console.log('addPostAPI : ', res);
      dispatch(setPost(res.data.posts));
    });
  };
};
//판매 상품 등록
const addPostAPI = () => {
  return async function (dispatch, useState, { history }) {};
};
//판매 상품 수정
const eidtPostAPI = () => {
  return async function (dispatch, useState, { history }) {};
};
//판매 상품 삭제
const deletePostAPI = () => {
  return async function (dispatch, useState, { history }) {};
};
export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
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
  setPost,
  addPost,
  editPost,
  deletePost,
  getPostAPI,
};

export { actionCreators };
