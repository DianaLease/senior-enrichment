'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'

import Main from './components/Main'


render(
  <Provider store={store} >
    <div>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  </Provider >,
  document.getElementById('main')
)

