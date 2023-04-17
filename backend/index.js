require('dotenv').config();
let express = require('express');
let app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const axios = require('axios');

async function apiRequest(endpoint, payload = {}, method = 'POST') {
  var url = `https://${process.env.SIGNALWIRE_SPACE}${endpoint}`

  resp = await axios.post(url, payload, {
    auth: {
      username: process.env.SIGNALWIRE_PROJECT_KEY,
      password: process.env.SIGNALWIRE_TOKEN
    }
  })
  return resp.data
}

app.post('/token', async (req, res) => {
  var resource = req.body.resource || 'myclient'
  var token = await apiRequest('/api/relay/rest/jwt', { expires_in: 120, resource: resource })
  token.project = process.env.SIGNALWIRE_PROJECT_KEY
  res.json(token)
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});


