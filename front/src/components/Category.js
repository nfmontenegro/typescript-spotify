import React, {useEffect, useState} from 'react'

function Category(props) {
  const [playlist, setPlaylist] = useState({})

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
      setPlaylist(json)
    }

    fetchCategory(props.match.params.categoryId)
  }, [])

  return <h1>{JSON.stringify(playlist)}</h1>
}

export default Category
