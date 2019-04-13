import dotenv from 'dotenv'

import axios, {AxiosRequestConfig, AxiosResponse, AxiosPromise} from 'axios'

dotenv.config()

async function authenticate(): Promise<AxiosPromise> {
  try {
    const URL: any = 'https://accounts.spotify.com/api/token'
    const CLIENT_ID: any = process.env.CLIENT_ID
    const CLIENT_SECRET: any = process.env.CLIENT_SECRET

    const options: AxiosRequestConfig = {
      url: URL,
      method: 'POST',
      params: {
        grant_type: 'client_credentials'
      },
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: CLIENT_ID,
        password: CLIENT_SECRET
      }
    }

    const response: AxiosResponse = await axios(options)
    return response.data
  } catch (err) {
    console.log('Error:', err)
  }
}

export {authenticate}
