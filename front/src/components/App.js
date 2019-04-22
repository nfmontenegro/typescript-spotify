import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Menu from './Menu'
import Categories from './Categories'
import Artists from './Artists'

import {Wrapper, Title, MaterialCumbs} from '../styled'

class App extends Component {
  state = {credentials: false}

  handleLogin = async event => {
    event.preventDefault()
    const response = await fetch('https://microservice-5ipko1n2e.now.sh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET
      }
    })
    const json = await response.json()
    localStorage.setItem('token', json.access_token)
    this.setState({credentials: true})
  }

  render() {
    return (
      <BrowserRouter>
        <Wrapper>
          <Title>Spotify Hooks</Title>
          {!this.state.credentials && (
            <button onClick={event => this.handleLogin(event)}>Get Credentials</button>
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
