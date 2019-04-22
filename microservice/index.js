const axios = require('axios')
const {send} = require('micro')
const cors = require('micro-cors')()

const handler = async (req, res) => {
  console.log(req.body)
  const URL = 'https://accounts.spotify.com/api/token'
  const CLIENT_ID = req.body.clientId
  const CLIENT_SECRET = req.body.clientSecret
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
      username: CLIENT_ID,
      password: CLIENT_SECRET
    }
  }
  const response = await axios(options)
  send(res, 200, response.data)
}

module.exports = cors(handler)
