import {Response, Request} from 'express'

import {authenticate} from '../lib/core/spotifyCredentials'

async function auth(request: Request, response: Response) {
  const keys = await authenticate()
  response.json(keys)
}

export {auth}
