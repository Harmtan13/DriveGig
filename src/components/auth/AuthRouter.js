import React, { useEffect } from 'react';
import { auth, db } from '../../Firebase';
import Signup from './Signup';

export default function AuthFunctions({ setCurrentUser, currentUser }) {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
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

  const login = () => auth.signInWithEmailAndPassword();

  const logout = () => auth.signOut();

  const resetPassword = () => auth.sendPasswordResetEmail();

  const updateProfile = () => auth.updateEmail();

  const updatePassword = () => auth.updatePassword();


  return (
    <>
      <Signup signUp = {signUp} />

      {currentUser.uid}
    </>
  );
}