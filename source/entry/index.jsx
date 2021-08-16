import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '../store/store.jsx'
import { Home } from '../pages/home.js'

import './reset.css'
import './global.css'

render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <Home />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
