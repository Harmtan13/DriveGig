import React, { useState } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import ShiftStart from './ShiftStart';
import NewTrip from './../trip/NewTrip';
import TripStart from '../trip/TripStart';

export default function Shift({history}) {
  const [shiftOdometer, setShiftOdometer] = useState('');
  const [offer, setOffer] = useState('');
  const [tripOdometer, setripOdometer] = useState('');

  return (
    <>
      <Switch>
          <Route
              exact
              path='/shift'
              render = {() => (
                <ShiftStart 
                  odometer={shiftOdometer} 
                  setOdometer={setShiftOdometer}
                  history={history} 
              />
              )}
            />

            <Route
              path='/shift/main' 
              render= {() => (
                <NewTrip
                  history={history} 
                />
              )}
            />

            <Route
              path='/shift/trip'
              render = {() => (
                <TripStart
                  history={history} 
                  offer={offer} 
                  setOffer={setOffer}
                  tripOdometer = {tripOdometer}
                  setripOdometer = {setripOdometer}
                />
              )}
            />
        </Switch>
    </>
  )
}