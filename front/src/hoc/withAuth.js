import React from 'react'
import {Redirect} from 'react-router-dom'

import {AppContext} from '../components/Context'

function withAuth(WrappedComponent) {
  return function() {
    console.log('Hoc component')
    return (
      <AppContext.Consumer>
        {context => (context.auth ? <WrappedComponent /> : <Redirect to="/401" />)}
      </AppContext.Consumer>
    )
  }
}

export default withAuth
