import { BrowserRouter, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
// import { history } from "../redux/configureStore";

import Main from "../pages/Main";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import PostWrite from "../pages/PostWrite";
import PostDetail from "../pages/PostDetail";

function App() {
  return (
    <>
      <ConnectedRouter>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" exact component={Signup}></Route>
        <Route path="/write" exact component={PostWrite}></Route>
        <Route path="/write/:id" exact component={PostWrite}></Route>
        <Route path="/post/:id" exact component={PostDetail}></Route>
      </ConnectedRouter>
    </>
  );
}

export default App;
