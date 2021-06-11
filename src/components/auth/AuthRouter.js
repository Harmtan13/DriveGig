import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';


export default function AuthFunctions({ setIsLoading, auth, db, currentUser, stage }) {
  const signUp = async (signUpInfo) => {
    const { email, password, firstName, lastName, clients } = signUpInfo;

    const newUser = await auth.createUserWithEmailAndPassword(email, password);

    db.collection('users').doc(newUser.user.uid).set({
      firstName,
      lastName,
      clientList: clients,
    });
  };

  const login = async (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = password => auth.sendPasswordResetEmail(password);

  const updateProfile = () => auth.updateEmail();

  const updatePassword = () => auth.updatePassword();

  const userState = {
    currentUser,
    logout,
    stage,
  };

  return (
    <>
      <div>

        <Route path = "/account/signup">
          <Signup signUp = {signUp} setIsLoading = {setIsLoading} />
        </Route>

        <Route path = "/account/login">
          <Login login = {login} setIsLoading = {setIsLoading} />
        </Route>

        <Route>
          <Profile logout = {logout} />
        </Route>

        <Route path = "/account/forgot-password">
          <ForgotPassword resetPassword = {resetPassword} setIsLoading = {setIsLoading} />
        </Route>
      </div>
    </>
  );
}