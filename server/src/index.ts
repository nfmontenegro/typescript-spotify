import express, {Application, Request, Response, Router} from 'express'

import {authenticate} from './lib/core/spotifyCredentials'

const app: Application = express()

const router: Router = Router()

router.get(
  '/',
  async (request: Request, response: Response): Promise<Response | any> => {
    const keys = await authenticate()
    response.json(keys)
  }
)

app.listen(3000, (err: Error) => {
  if (err) throw new Error('Error when running server')
  console.log('Server running in port: 3000')
})
