import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../routes/PrivateRoute';
import HomeSummary from './HomeSummary';
import Signup from './Signup';
import Login from './Login';
import ForgotPassword from './ForgotPassword';


export default function AuthFunctions({ setIsLoading, auth, db, setCurrentUser, currentUser, stage }) {
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
        <PrivateRoute
          exact
          path = "/"
          component = {HomeSummary}
          userState = {userState}
        />

        <Route path = "/signup">
          <Signup signUp = {signUp} setIsLoading = {setIsLoading} />
        </Route>

        <Route path = "/login">
          <Login login = {login} setIsLoading = {setIsLoading} />
        </Route>

        <Route path = "/forgot-password">
          <ForgotPassword resetPassword = {resetPassword} setIsLoading = {setIsLoading} />
        </Route>
      </div>
    </>
  );
}