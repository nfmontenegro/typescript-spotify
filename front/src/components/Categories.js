import React, {useState, useEffect} from 'react'

import {Card, CardImage, Container, Column, Row, SubTitle} from '../styled'

function Categories() {
  const [stateToken, setToken] = useState('')
  const [categories, setCategories] = useState('')

  async function fetchCategories() {
    const response = await fetch(
      'https://api.spotify.com/v1/browse/categories',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    const {categories} = await response.json()
    setCategories(categories)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    if (token) {
      fetchCategories()
    }
  }, [stateToken])

  const token = localStorage.getItem('token')
  return (
    <>
      <SubTitle>Categories</SubTitle>
      <Container>
        <Row>
          {token
            ? categories.items &&
              categories.items.map(category => {
                return (
                  <Column key={category.id}>
                    <Card size="300px">
                      <SubTitle>{category.name}</SubTitle>
                      <CardImage image={category.icons[0].url} />
                    </Card>
                  </Column>
                )
              })
            : 'No token provide'}
        </Row>
      </Container>
    </>
  )
}

export default Categories
