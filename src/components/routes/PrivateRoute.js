import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, userState, ...rest }) {
  return (
    <Route {...rest}>
      {userState.currentUser ? <Component {...userState} /> : <Redirect to = "/signup" /> }
    </Route>
  );
}