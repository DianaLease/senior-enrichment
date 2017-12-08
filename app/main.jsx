'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import CampusList from './components/CampusList';
import SingleCampus from './components/SingleCampus';
import Navbar from './components/Navbar'


render(
  <Provider store={store} >
    <div>
      <BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/campuses" component={CampusList} />
            <Route path="/campuses/:campusId" component={SingleCampus} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider >,
  document.getElementById('main')
)

