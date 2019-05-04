import React, {useEffect, useState} from 'react'
import {withRouter} from 'react-router-dom'

import FullCard from './FullCard'

import {Container, Row, SubTitle} from '../styled'

function Category(props) {
  const [playlists, setPlaylists] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchCategory(categoryId) {
      const URL = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`
      const token = localStorage.getItem('token')
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const json = await response.json()
      return json.error ? setError(json.error.message) : setPlaylists(json.playlists.items)
    }

    fetchCategory(props.match.params.categoryId)
  }, [])

  function renderItem(id) {
    props.history.push(`/playlist/${id}`)
  }

  return (
    <Container>
      <SubTitle color="palevioletred">Category</SubTitle>
      {error}
      <Row>
        {playlists.length > 0 &&
          playlists.map(playlist => {
            return (
              <FullCard
                key={playlist.id}
                id={playlist.id}
                name={playlist.name}
                image={playlist.images[0].url}
                tab={playlist.external_urls.spotify}
                renderItem={renderItem}
              />
            )
          })}
      </Row>
    </Container>
  )
}

export default withRouter(Category)
