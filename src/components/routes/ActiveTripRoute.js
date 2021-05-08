import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function ActiveTripRoute({
  component: Component,
  path,
  stage,
  currentUser,
}) {
  // const compState = {
  //   ...shiftState,
  //   ...tripState,
  // };
  // console.log(compState);
  return (
    <>
      <Route {...path}>
        {stage && stage !== path ? <Redirect exact to = "/statistics" /> : <Component currentUser = {currentUser} /> }
      </Route>
    </>
  );
}