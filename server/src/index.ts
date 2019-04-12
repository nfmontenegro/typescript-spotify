import express, {Application, Request, Response} from 'express'

import routes from './routes'

const app: Application = express()

app.use('/api', routes)

app.get('/', (request: Request, response: Response) => {
  response.send('Spotify authenticate')
})

app.listen(3000, (err: Error) => {
  if (err) throw new Error('Error when running server')
  console.log('Server running in port: 3000')
})
