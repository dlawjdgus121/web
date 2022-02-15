import { createAction, handleActions } from 'redux-actions';
import { immerable, produce } from 'immer';

import { apis } from '../../shared/api';

// post
const SET_POST = 'SET_POST';
const ADD_POST = 'ADD_POST';
const EDIT_POST = 'EDIT_POST';
const DELETE_POST = 'DELETE_POST';
const ONE_POST = 'ONE_POST';

// comment
const GET_COMMENTS = 'GET_COMMENTS';
const SET_COMMENTS = 'SET_COMMENTS';
const DEL_COMMENTS = 'DEL_COMMENTS';

const setPost = createAction(SET_POST, (post_list) => ({ post_list }));
const addPost = createAction(ADD_POST, (post) => ({ post }));
const editPost = createAction(EDIT_POST, (post_id, post) => ({
  post_id,
  post,
}));
const deletePost = createAction(DELETE_POST, (post_id) => ({ post_id }));
const getOnePost = createAction(ONE_POST, (post) => ({ post }));

const getComments = createAction(GET_COMMENTS, (comments) => ({ comments }));
const setComments = createAction(
  SET_COMMENTS,
  (comment, nickname, updatedAt, userId, commentId) => ({
    comment,
    nickname,
    updatedAt,
    userId,
    commentId,
  })
);
const delComment = createAction(DEL_COMMENTS, (del_idx) => ({ del_idx }));
const initialState = {
  list: [],
  post: [],
  comments: [],
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
    await apis.posts().then(function (res) {
      // console.log('addPostAPI : ', res);
      dispatch(setPost(res.data.posts));
    });
  };
};
//판매 상품 등록
const addPostAPI = (title, price, imgurl, content) => {
  return function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');

    apis
      .add(
        { title, price, imgurl, content },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (res) {
        history.replace('/');
        console.log(res);
      });
  };
};
//판매 상품 하나만 가져오기
const getOnePostAPI = (postId) => {
  return async function (dispatch, useState, { history }) {
    await apis.post(postId).then(function (res) {
      console.log(res.data.post);
      dispatch(getOnePost(res.data.post));
      // 해당 글의 댓글 가져오기
      dispatch(getComments(res.data.comments));
    });
  };
};
//판매 상품 수정
const editPostAPI = (postId, title, price, imgurl, contents) => {
  return async function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');
    console.log(postId, title, price, imgurl, contents);
    apis
      .edit(
        { postId, title, price, imgurl, contents },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (res) {
        history.replace('/');
        console.log(res);
      });
  };
};
//판매 상품 삭제
const deletePostAPI = (post_id) => {
  return async function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');
    console.log(token, 'dddddddddd');

    apis
      .del({
        data: { postId: post_id },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (res) {
        console.log(res);
        history.replace('/');
      });
  };
};

// 댓글 #######################################################3

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
        dispatch(
          setComments(
            comment,
            res.data.result.nickname,
            res.data.result.updatedAt,
            res.data.result.userId,
            res.data.result.commentId
          )
        );
      });
  };
};

// 댓글 삭제하기
const delCommentAPI = (commentId) => {
  return function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');

    apis
      .delComment({
        data: { commentId },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(function (res) {
        const del_idx = useState().post.comments.findIndex(
          (c) => c.commentId === commentId
        );
        console.log(del_idx);
        // 삭제 액션 수행
        dispatch(delComment(del_idx));
      });
  };
};

// 댓글 수정하기
const editCommentAPI = (commentId, comment) => {
  return function (dispatch, useState, { history }) {
    const token = localStorage.getItem('login-token');

    apis
      .editComment(
        { commentId, comment },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(function (res) {});
  };
};

export default handleActions(
  {
    [SET_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.post_list;
      }),
    [ONE_POST]: (state, action) =>
      produce(state, (draft) => {
        // console.log(action.payload.post, '뭔데');
        draft.post = action.payload.post;
      }),
    [ADD_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.post);
      }),
    [EDIT_POST]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload;
      }),
    [DELETE_POST]: (state, action) =>
      produce(state, (draft) => {
        let deleted = draft.list.filter((e, i) => {
          return parseInt(action.payload.post_idx) !== i;
        });
        draft.list = deleted;
      }),
    [GET_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        draft.comments = action.payload.comments;
      }),

    [SET_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        draft.comments.unshift(action.payload);
        console.log(action.payload);
      }),

    [DEL_COMMENTS]: (state, action) =>
      produce(state, (draft) => {
        let deleted = draft.comments.filter((e, i) => {
          return parseInt(action.payload.del_idx) !== i;
        });
        draft.comments = deleted;
      }),
  },
  initialState
);

const actionCreators = {
  setPost,
  addPost,
  editPost,
  deletePost,
  getOnePost,
  getOnePostAPI,
  getPostAPI,
  addPostAPI,
  editPostAPI,
  deletePostAPI,
  getOnePostAPI,

  addCommentAPI,
  delCommentAPI,
  editCommentAPI,
};

export { actionCreators };
