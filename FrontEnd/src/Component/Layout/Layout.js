import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Data from "../../Container/Data";
import {Subscribe} from "unstated";
import Login from "../Login/Login";
// import Main from "../Main/Main";
import SignUp from "../SignUp/SignUp";
import Insert from "../Insert/Insert";
import Main from "../Main/Main";
// import 
// import Topic from "../Topic/Topic";
// import TopicContent from "../TopicContent/TopicContent";

export default function Layout() {
  return (
    <BrowserRouter>
      <Route
            path="/"
            component={() => (
              <Subscribe to={[Data]}>
                {(data) => <Login check={data} />}
              </Subscribe>
            )}
          ></Route>
      {/* <Route path="/signup" exact component={SignUp}></Route> */}
      
      <Route
            path="/signup"
            component={() => (
              <Subscribe to={[Data]}>
                {(data) => <SignUp check={data} />}
              </Subscribe>
            )}
          ></Route>

      <Route
            path="/insert"
            component={() => (
              <Subscribe to={[Data]}>
                {(data) => <Insert check={data} />}
              </Subscribe>
            )}
          ></Route>
      <Route
            path="/main" exact
            component={() => (
              <Subscribe to={[Data]}>
                {(data) => <Main check={data} />}
              </Subscribe>
            )}
          ></Route>    
          


      {/* <Route path="/Topic" exact component={Topic}></Route>
      <Route path="/" exact component={Main} />
      <Route path="/:id" exact component={TopicContent} /> */}
    </BrowserRouter>
  );
}
