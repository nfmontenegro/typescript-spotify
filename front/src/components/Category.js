import React, {useEffect, useState} from 'react'

import {Container, Row, SubTitle} from '../styled'

import FullCard from './FullCard'

function Category(props) {
  const [playlists, setPlaylists] = useState([])

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
      setPlaylists(json.playlists.items)
    }

    fetchCategory(props.match.params.categoryId)
  }, [])

  function renderItem(id) {
    console.log('Hello!', id)
  }

  return (
    <>
      <SubTitle>Category</SubTitle>
      <Container>
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
    </>
  )
}

//api.spotify.com/v1/playlists/{playlist_id}

export default Category
