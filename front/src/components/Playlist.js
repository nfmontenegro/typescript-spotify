import React, {useEffect, useState} from 'react'

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
        description: json.description,
        tracks: json.tracks.items
          .filter(item => item.track.preview_url)
          .map(item => item.track.preview_url)
      }
      return setPlaylist(playlistData)
    }

    fetchPlaylist(id)
  }, [])

  return (
    <>
      <h1>{playlist.description}</h1>

      {playlist &&
        playlist.tracks.length > 0 &&
        playlist.tracks.map(item => {
          return <audio controls src={item} />
        })}
    </>
  )
}

export default Playlist
