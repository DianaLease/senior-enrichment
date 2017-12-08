'use strict'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'

// import store from './store'
// import Root from './components/Root'
import Main from './components/Main'
import StatefulCampusList from './components/StatefulCampusList'

render(
  <BrowserRouter>
    <div>
      <h1>Margaret Hamilton Interplanetary Academy of JavaScript</h1>
      <Main />
    </div>
  </BrowserRouter>,
  document.getElementById('main')
)

  // < Provider store = { store } >
  //   </Provider >,
