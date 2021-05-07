import React from 'react';
import { Route, Redirect } from 'react-router-dom';


export default function ActiveTripRoute({
  component: Component,
  path,
  stage,
  ...compState
}) {
  // const compState = {
  //   ...shiftState,
  //   ...tripState,
  // };
  console.log(compState);
  return (
    <>
      <Route {...path}>
        {stage && stage !== path ? <Redirect to = {stage} /> : <Component {...compState} /> }
      </Route>
    </>
  );
}