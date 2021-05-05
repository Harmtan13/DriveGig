import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { auth, db } from './Firebase';

import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';
import AuthRouter from './components/auth/AuthRouter';
import ShiftRouter from './components/shift/00-shiftRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDetails = await db.collection('users').doc(user.uid).get();
        setCurrentUser({ ...user, ...userDetails.data() });
        setIsLoading(false);
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const authState = {
    auth,
    db,
    setIsLoading,
  };

  const appState = {
    currentUser,
    setCurrentUser,
  };

  return (
    <Router>

      <div className = "container">
        <header>
          <h1><Link to = "/">DriveGig</Link></h1>
        </header>
        <Switch>
          {
            !isLoading
            && (
            <Route path = "/">
              <AuthRouter {...appState} {...authState} />
              <ShiftRouter currentUser = {currentUser} />

              <Route path = "/input-expenses">
                <Gasform />
              </Route>

              <Route path = "/statistics">
                <Stats />
              </Route>
            </Route>
            )
          }
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}