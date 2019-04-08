import axios, {AxiosRequestConfig, AxiosResponse, AxiosPromise} from 'axios'

async function authenticate(): Promise<AxiosPromise> {
  try {
    const URL: any = 'https://accounts.spotify.com/api/token'
    const CLIENT_ID: any = 'bcf049a8882c4be597b4ff7019c61807'
    const CLIENT_SECRET: any = 'e6ea4b89ad964ab2b0d7389b14ece51f'

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

export {
  authenticate
}
