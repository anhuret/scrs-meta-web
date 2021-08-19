import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '../store/store.jsx'
import { Site } from '../pages/site.js'

import '../style/reset.css'
import '../style/global.css'

render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <Site />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
