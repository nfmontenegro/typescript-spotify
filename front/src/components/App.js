import React, {useState, useEffect} from 'react'
import {Route, withRouter} from 'react-router-dom'

import Menu from './Menu'
import Artists from './Artists'
import Category from './Category'
import Unauthenticated from './401'
import Categories from './Categories'

import {AppContext} from './Context'

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

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setCredentials(token)
    }
  }, [])

  return (
    <AppContext.Provider value={{auth: credentials ? true : false}}>
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

      <Route path="/category/:categoryId" component={Category} />
      <Route path="/categories" component={Categories} />
      <Route path="/artists" component={Artists} />
      <Route path="/401" component={Unauthenticated} />
    </AppContext.Provider>
  )
}

export default withRouter(App)
