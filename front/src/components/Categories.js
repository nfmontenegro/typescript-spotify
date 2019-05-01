import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'
import {compose} from 'recompose'

import {Container, Row, SubTitle} from '../styled'

import FullCard from './FullCard'
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
                <FullCard
                  key={category.id}
                  id={category.id}
                  name={category.name}
                  image={category.icons[0].url}
                  renderItem={renderCategory}
                />
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
