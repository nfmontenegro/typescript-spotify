import React, {useContext} from 'react'

import {AppContext} from '../components/Context'

function withAuth(WrappedComponent) {
  return function(props) {
    const currentData = useContext(AppContext)
    return currentData.auth ? <WrappedComponent {...props} /> : 'No token provide'
  }
}

export default withAuth
