import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { RESP } from '../../shared/response';

// MOCK API
const respSignUp = RESP.SIGNUP;
const respCheckId = RESP.CHECK_ID;
const respLogIn = RESP.LOGIN;

//actions
// const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';
const SET_USER = 'SET_USER';

//action creators

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

const hi = () => {
  return console.log('hi');
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
  hi,
};

export { actionCreators };
