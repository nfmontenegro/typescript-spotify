import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import './index.css'
import App from './components/App'
import Context from './components/Context'

ReactDOM.render(
  <BrowserRouter>
    <Context>
      <App />
    </Context>
  </BrowserRouter>,
  document.getElementById('root')
)
