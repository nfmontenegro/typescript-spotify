import React from 'react'
import {withRouter} from 'react-router-dom'

import {Labels} from '../styled'

function Menu({history}) {
  function renderRouter(router) {
    history.push(router)
  }
  return (
    <>
      <Labels onClick={() => renderRouter('/albums')}>Albums</Labels>
      <Labels onClick={() => renderRouter('/artists')}>Artists</Labels>
      <Labels>Playlists</Labels>
    </>
  )
}

export default withRouter(Menu)
