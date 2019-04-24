const axios = require('axios')
const {send} = require('micro')
const cors = require('micro-cors')()

const handler = async (req, res) => {
  const URL = 'https://accounts.spotify.com/api/token'

  const options = {
    url: URL,
    mode: 'cors',
    method: 'POST',
    params: {
      grant_type: 'client_credentials'
    },
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    auth: {
      username: req.body.clientId,
      password: req.body.clientSecret
    }
  }
  const response = await axios(options)
  send(res, 200, response.data)
}

module.exports = cors(handler)
