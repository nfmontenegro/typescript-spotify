import React from 'react'

export const AppContext = React.createContext()

function Context(props) {
  const state = {
    auth: false
  }

  return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>
}

export default Context
