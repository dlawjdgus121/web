import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { RESP } from '../../shared/response';

// MOCK API
const respLogIn = RESP.LOGIN;
const respCheckId = RESP.CHECK_ID;
const respSignUp = RESP.SIGNUP;

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
};

const user_initial = {
  user_name: 'jun park',
};

const logInAPI = () => {
  console.log(respLogIn.token);

  // 받은 토큰을 로컬스토리지에 저장
  if (respLogIn.token) {
    localStorage.setItem('login-token', respLogIn.token);
  }
};

const checkIdAPI = () => {
  if (respCheckId.ok) {
    alert('사용 가능한 아이디입니다.');
    return true;
  }
  alert('이미 존재하는 아이디입니다.');
};

//reducer
export default handleActions(
  {
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
  logInAPI,
  checkIdAPI,
};

export { actionCreators };
