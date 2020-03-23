import React, { useState } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom'
import ShiftStart from './ShiftStart';
import ShiftPause from './ShiftPause';
import ShiftEnd from './ShiftEnd';
import NewTrip from './../trip/NewTrip';
import TripStart from '../trip/TripStart';
import Pickup from '../trip/Pickup';
import Departure from '../trip/Departure';
import TripEnd from '../trip/TripEnd';

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
              path='/shift/paused'
              render = { () => (
                <ShiftPause
                  history={history} 
                />
              )}
            />


            <Route
              path='/shift/end'
              render = { () => (
                <ShiftEnd
                  history={history} 
                />
              )}
            />

            <Route
              exact
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

            <Route
              path='/shift/trip/pickup'
              render = {() => (
                <Pickup
                  history={history}
                />
              )}
            />

            <Route
              path='/shift/trip/departure'
              render = {() => (
                <Departure
                  history={history}
                />
              )}
            />

            <Route
              path='/shift/trip/delivery'
              render = { () => (
                <TripEnd
                  history={history}
                />
              )}
            />
        </Switch>
    </>
  )
}