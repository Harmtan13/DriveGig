import {
  Route,
  Switch
} from 'react-router-dom'
import StartTrip from './StartTrip';
import Pickup from './Pickup';
import Departure from '../trip/Departure';
import EndTrip from './EndTrip';

import React from 'react'

export default function Trip({history}) {
  return (
    <>
      <Switch>
          <Route
            exact
            path='/shift/trip'
            render = {() => (
              <StartTrip
                history={history}
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
              <EndTrip
                history={history}
              />
            )}
          />
      </Switch>
    </>
  )
}
