'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const express_1 = __importDefault(require('express'))
const spotifyCredentials_1 = require('./lib/core/spotifyCredentials')
const app = express_1.default()
app.get('/', async (request, response) => {
  const keys = await spotifyCredentials_1.authenticate()
  response.json(keys)
})
app.listen(3000, err => {
  if (err) throw new Error('Error when running server')
  console.log('Server running in port: 3000')
})
//# sourceMappingURL=index.js.map
