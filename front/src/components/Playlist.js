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
    <>
      <h1>{playlist.name}</h1>
      <h1>{playlist.description}</h1>
      <img src={playlist.image} />
      {playlist &&
        playlist.tracks.length > 0 &&
        playlist.tracks.map(item => {
          return (
            <>
              <ul>
                <li>{item.name}</li>
                <li>{item.artist}</li>
                <li>{item.album}</li>
              </ul>
              <img src={item.albumImage} />
              <audio controls src={item.preview} />
            </>
          )
        })}
    </>
  )
}

export default Playlist
