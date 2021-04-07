import React from 'react';
import Signup from './Signup';

export default function AuthFunctions({ signUp }) {
  return (
    <>
      <Signup signUp = {signUp} />
    </>
  );
}