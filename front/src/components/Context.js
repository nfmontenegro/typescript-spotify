import React from 'react'

export const AppContext = React.createContext({auth: false})

function Context(props) {
  return <AppContext.Provider>{props.children}</AppContext.Provider>
}

export default Context
