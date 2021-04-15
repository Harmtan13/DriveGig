import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { auth, db } from '../../Firebase';
import PrivateRoute from '../routes/PrivateRoute';
import HomeSummary from './HomeSummary';
import Signup from './Signup';
import Login from './Login';


export default function AuthFunctions({ setCurrentUser, currentUser, setIsLoading, isLoading }) {
  console.log(currentUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const signUp = async (signUpInfo) => {
    const { email, password, firstName, lastName, clients } = signUpInfo;

    const newUser = await auth.createUserWithEmailAndPassword(email, password);

    db.collection('users').doc(newUser.user.uid).set({
      firstName,
      lastName,
      clientList: clients,
    });
  };

  const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logout = () => auth.signOut();

  const resetPassword = email => auth.sendPasswordResetEmail();

  const updateProfile = () => auth.updateEmail();

  const updatePassword = () => auth.updatePassword();

  const userState = {
    currentUser,
    logout,
  };


  return (
    <>
      {
      !isLoading
      && (
      <div>
        <PrivateRoute exact path = "/" component = {HomeSummary} userState = {userState} />

        <Route path = "/signup">
          <Signup signUp = {signUp} />
        </Route>

        <Route path = "/login">
          <Login login = {login} />
        </Route>
      </div>
      )
    }
    </>
  );
}