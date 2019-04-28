import React, {useContext} from 'react'
import {Redirect} from 'react-router-dom'

import {AppContext} from '../components/Context'

function withAuth(WrappedComponent) {
  return function() {
    let currentData = useContext(AppContext)
    console.log('Hoc component', currentData)
    return currentData.auth ? <WrappedComponent /> : <Redirect to="/401" />
  }
}

export default withAuth
