import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Menu from './Menu'
import Albums from './Albums'
import Artists from './Artists'

import {Wrapper, Title, MaterialCumbs} from '../styled'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Title>Spotify Hooks</Title>
          <MaterialCumbs>
            <Menu />
          </MaterialCumbs>
        </Wrapper>
        <Route path="/albums" component={Albums} />
        <Route path="/artists" component={Artists} />
      </BrowserRouter>
    )
  }
}

export default App
