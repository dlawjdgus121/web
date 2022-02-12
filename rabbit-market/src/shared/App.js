import {
  BrowserRouter as BrowserRouter,
  Router,
  Routes,
  Route,
} from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../redux/configureStore';

import Main from '../pages/Main';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import PostWrite from '../pages/PostWrite';
import PostDetail from '../pages/PostDetail';

import Button from '../elements/Button';
import Grid from '../elements/Grid';
import Header from '../components/Header';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Grid margin="5.8rem 0">
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        {/* 게시물 작성 */}
        <Route path="/write" exact component={PostWrite}></Route>
        {/* 게시물 수정 */}
        <Route path="/write/:id" exact component={PostWrite}></Route>
        {/* 상세 페이지 */}
        <Route path="/post/:id" exact component={PostDetail}></Route>
      </Grid>
      <Button
        is_float
        text="+"
        _onClick={() => {
          // history.push("/write");
        }}
      ></Button>
    </BrowserRouter>
  );
}

export default App;
