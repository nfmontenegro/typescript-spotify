import React from 'react'
import {withRouter} from 'react-router-dom'

import {Label} from '../styled'

function Menu({history}) {
  function renderRouter(router) {
    history.push(router)
  }
  return (
    <>
      <Label onClick={() => renderRouter('/categories')}>Categories</Label>
    </>
  )
}

export default withRouter(Menu)
