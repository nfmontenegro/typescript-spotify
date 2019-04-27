import React, {useState} from 'react'
import {Route, withRouter} from 'react-router-dom'

import Artists from './Artists'
import Categories from './Categories'

import Menu from './Menu'

import {Wrapper, Title, MaterialCumbs} from '../styled'

function App(props) {
  const [credentials, setCredentials] = useState(false)

  async function getCredentials(event) {
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
    setCredentials(true)
  }

  function logOut() {
    localStorage.clear()
    setCredentials(false)
    props.history.push('/')
  }

  return (
    <>
      <Wrapper>
        <Title>Spotify Hooks</Title>
        {!credentials ? (
          <button onClick={event => getCredentials(event)}>Get Credentials</button>
        ) : (
          <>
            <button onClick={() => logOut()}>Logout</button>
            <MaterialCumbs>
              <Menu />
            </MaterialCumbs>
          </>
        )}
      </Wrapper>

      <Route path="/categories" component={Categories} />
      <Route path="/artists" component={Artists} />
    </>
  )
}

export default withRouter(App)
