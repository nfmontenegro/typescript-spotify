import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Menu from './Menu'
import Categories from './Categories'
import Artists from './Artists'

import {Wrapper, Title, MaterialCumbs} from '../styled'

class App extends Component {
  handleLogin = async event => {
    event.preventDefault()
    const response = await fetch('http://localhost:3000/api/authenticate', {
      method: 'GET'
    })
    const json = await response.json()
    localStorage.setItem('token', json.access_token)
  }

  render() {
    const token = localStorage.getItem('token')
    return (
      <BrowserRouter>
        <Wrapper>
          <Title>Spotify Hooks</Title>
          {!token && (
            <button onClick={event => this.handleLogin(event)}>
              Get Credentials
            </button>
          )}
          <MaterialCumbs>
            <Menu />
          </MaterialCumbs>
        </Wrapper>
        <Route path="/categories" component={Categories} />
        <Route path="/artists" component={Artists} />
      </BrowserRouter>
    )
  }
}

export default App
