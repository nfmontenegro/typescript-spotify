import axios, {AxiosResponse} from 'axios'

import {authenticate} from '../lib/core/spotifyCredentials'

describe('# Credentials', () => {
  test('Get credentials user', async () => {
    const response = await axios('http://localhost:3000/', {method: 'GET'})
    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
  })
})
