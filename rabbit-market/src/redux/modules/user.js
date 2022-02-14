import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { apis } from '../../shared/api';

//actions
// const LOG_IN = 'LOG_IN';
const CHECK_ID = 'CHECK_ID';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//action creators

const checkid = createAction(CHECK_ID, () => ({}));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

//initialState
const initialState = {
  user: null,
  is_login: false,
  is_check_id: false,
};

// 회원가입
const registerDB = (id, pw, nickname) => {
  console.log(id, pw, nickname);
  return function ({ history }) {
    apis.signup(id, pw, nickname).then((res) => {
      console.log(res);
      if (!res.data.ok) {
        alert(res.data.result);
      }
    });
  };
};

// 로그인
const setLoginDB = (id, pwd) => {
  return function (dispatch, { history }) {
    apis
      .login(id, pwd)
      .then((res) => {
        localStorage.setItem('idToken', res.data[0].token);
        dispatch(setUser({ id: id }));
        history.replace('/');
      })
      .catch((err) => {
        window.alert('없는 회원정보 입니다! 회원가입을 해주세요!');
      });
  };
};

// 아이디 체크
const checkIdDB = (id) => {
  return function (dispatch) {
    apis
      .checkId(id)
      .then((res) => {
        window.alert('사용 가능한 아이디입니다.');
        dispatch(checkid());
      })
      .catch((err) => {
        window.alert('이미 존재하는 아이디입니다.');
      });
  };
};

//reducer
export default handleActions(
  {
    [CHECK_ID]: (state, action) =>
      produce(state, (draft) => {
        draft.is_check_id = true;
      }),

    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

//action creator export
const actionCreators = {
  registerDB,
  setLoginDB,
  logOut,
  checkIdDB,
};

export { actionCreators };
