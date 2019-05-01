import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import {Card, CardImage, Container, Column, Row, SubTitle} from '../styled'

import withAuth from '../hoc/withAuth'

function Categories(props) {
  const [token, setToken] = useState('')
  const [categories, setCategories] = useState('')

  async function fetchCategories(token) {
    const response = await fetch('https://api.spotify.com/v1/browse/categories', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    const {categories} = await response.json()
    setCategories(categories)
  }

  function renderCategory(categoryId) {
    props.history.push(`/category/${categoryId}`)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
    if (token) {
      fetchCategories(token)
    }
  }, [token])

  return (
    <>
      <SubTitle>Categories</SubTitle>
      <Container>
        <Row>
          {token &&
            categories.items &&
            categories.items.map(category => {
              return (
                <Column key={category.id}>
                  <Card size="300px" onClick={() => renderCategory(category.id)}>
                    <SubTitle>{category.name}</SubTitle>
                    <CardImage image={category.icons[0].url} />
                  </Card>
                </Column>
              )
            })}
        </Row>
      </Container>
    </>
  )
}

export default compose(
  withRouter,
  withAuth
)(Categories)
