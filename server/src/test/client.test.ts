import axios, {AxiosResponse} from 'axios'

describe('# Credentials', () => {
  test('Get credentials user', async () => {
    const response: AxiosResponse = await axios(process.env.HOST, {
      method: 'GET'
    })

    expect(response.status).toBe(200)
    expect(response.statusText).toBe('OK')
  })
})
