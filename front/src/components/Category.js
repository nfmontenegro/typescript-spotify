import React, {useEffect, useState} from 'react'

import {Card, CardImage, Container, Column, Row, SubTitle, Button} from '../styled'

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

  function openInNewTab(url) {
    const windowTab = window.open(url, '_blank')
    return windowTab.focus
  }

  return (
    <>
      <SubTitle>Category</SubTitle>
      <Container>
        <Row>
          {playlists.length > 0 &&
            playlists.map(playlist => {
              console.log(playlist)
              return (
                <Column key={playlist.id}>
                  <Card size="300px">
                    <SubTitle>{playlist.name}</SubTitle>
                    <CardImage size="400px" image={playlist.images[0].url} />
                    <Button onClick={() => openInNewTab(playlist.external_urls.spotify)}>
                      Open Playlist
                    </Button>
                  </Card>
                </Column>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

//api.spotify.com/v1/playlists/{playlist_id}

https: export default Category
