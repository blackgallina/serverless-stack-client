import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import NotFound from "./containers/NotFound";
import Signup from "./containers/Signup";
import NewNote from "./containers/NewNote";
import Notes from "./containers/Notes";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";


export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <AuthenticatedRoute exact path="/notes/new">
        <NewNote />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/notes/:id">
        <Notes />
      </AuthenticatedRoute>
      <UnauthenticatedRoute exact path="/login">
	  <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
          <Signup />
      </UnauthenticatedRoute>
      <Route exact path="/settings">
          <Settings />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
	<NotFound />
      </Route>
    </Switch>
  );
}
