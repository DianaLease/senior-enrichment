'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import Main from './components/Main'


render(
  <Provider store={store} >
    <BrowserRouter>
      <div>
        <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
        <Main />
        <Root />
      </div>
    </BrowserRouter>
  </Provider >,
  document.getElementById('main')
)

