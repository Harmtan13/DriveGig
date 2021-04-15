import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateRoute({ component: Component, userState, ...rest }) {
  const { currentUser } = userState;
  console.log(currentUser);
  return (
    <>
      <Route {...rest}>
        {currentUser ? <Component {...userState} /> : <Redirect to = "/signup" /> }
      </Route>
    </>
  );
}