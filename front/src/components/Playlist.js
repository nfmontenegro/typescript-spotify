import React, {useEffect, useState} from 'react'

import {Card, CardImage, Column, Container, SubTitle} from '../styled'

function Playlist(props) {
  const [playlist, setPlaylist] = useState({tracks: []})
  const id = props.match.params.playlistId

  useEffect(() => {
    async function fetchPlaylist(id) {
      const URL = `https:///api.spotify.com/v1/playlists/${id}`
      const token = localStorage.getItem('token')
      const response = await fetch(URL, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const json = await response.json()
      const playlistData = {
        name: json.name,
        description: json.description,
        primaryColor: json.primary_color,
        followers: json.followers.total,
        image: json.images[0].url,
        tracks: json.tracks.items
          .filter(item => item.track.preview_url)
          .map(item => {
            return {
              name: item.track.name,
              artist: item.track.artists[0].name,
              album: item.track.album.name,
              albumImage: item.track.album.images[1].url,
              preview: item.track.preview_url
            }
          })
      }
      return setPlaylist(playlistData)
    }

    fetchPlaylist(id)
  }, [])

  return (
    <Container>
      <Column>
        <Card>
          <SubTitle>{playlist.name}</SubTitle>
          <SubTitle>{playlist.description}</SubTitle>
          <CardImage size="300px" image={playlist.image} />
          {playlist &&
            playlist.tracks.length > 0 &&
            playlist.tracks.map(item => {
              return (
                <>
                  <SubTitle>{item.name}</SubTitle>
                  <SubTitle>{item.artist}</SubTitle>
                  <SubTitle>{item.album}</SubTitle>
                  <CardImage size="300px" image={item.albumImage} />
                  <audio controls src={item.preview} />
                </>
              )
            })}
        </Card>
      </Column>
    </Container>
  )
}

export default Playlist
