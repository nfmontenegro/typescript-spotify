import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'

import Menu from './Menu'
import Categories from './Categories'
import Artists from './Artists'

import {Wrapper, Title, MaterialCumbs} from '../styled'

class App extends Component {
  handleLogin = async event => {
    event.preventDefault()
    const URL = 'https://accounts.spotify.com/api/token'
    const CLIENT_ID = 'bcf049a8882c4be597b4ff7019c61807'
    const CLIENT_SECRET = 'e6ea4b89ad964ab2b0d7389b14ece51f'
    const options = {
      url: URL,
      mode: 'cors',
      method: 'POST',
      params: {
        grant_type: 'client_credentials'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Origin': '*'
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET
      }
    }
    const response = await axios(options)
    console.log(response)
  }

  render() {
    const token = localStorage.getItem('token')
    return (
      <BrowserRouter>
        <Wrapper>
          <Title>Spotify Hooks</Title>
          {!token && <button onClick={event => this.handleLogin(event)}>Get Credentials</button>}
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
