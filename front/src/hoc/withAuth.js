import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'

import {AppContext} from '../components/Context'

function withAuth(WrappedComponent) {
  return function(props) {
    let currentData = useContext(AppContext)
    return currentData.auth ? <WrappedComponent {...props} /> : <Redirect to="/401" />
  }
}

export default withAuth
