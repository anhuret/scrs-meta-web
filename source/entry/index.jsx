import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { StoreProvider } from '../store/store.jsx'
import { Main } from '../pages/main.js'

import '../style/reset.css'
import '../style/global.css'

render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <Main />
      </StoreProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
)

if (import.meta.hot) {
  import.meta.hot.accept()
}
