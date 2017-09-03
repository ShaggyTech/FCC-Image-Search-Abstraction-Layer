'require strict'

// NPM Packages and other 
const express = require('express'),
      path = require('path'),
      cors = require('cors'), 
      Database = require('./modules/database'),  // Database functions
      Helpers = require('./modules/helpers'),
      Imgur = require('./modules/imgur'),
      History = require('./modules/history'),
      app = express();

// Lets us know if Database.connect() has been called once since the app started
let initialized = false;

require('dotenv').config()
app.use(cors());

// Static Home page
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/imgsearch', Helpers.asyncErrorCatcher(async (req, res, next) => {
  const history = await History.getHistory()
  res.json(history)
}))

app.get('/api/imgsearch/:param', Helpers.asyncErrorCatcher(async (req, res, next) => {
  //const userIP = req.headers['x-forwarded-for'].split(',')[0]
  const offset = req.query.offset
  
  if (Object.keys(req.query).length > 0) {
    if (offset) {
      if (offset < 1 || isNaN(offset) || offset > 165) {
        res.json({"error": 'Invalid offset entered. Provided offset must be a positive integer no greater than 165'})
      }
      else {
        const searchResults = await Imgur.search(req.params.param, offset /* , userIP */ )
        res.json(searchResults)
      }
    }
    else {
      res.json({error: 'invalid query entered, usage example: /api/imgsearch/lolcats?offset=1'})
    }
  }
  else {
    const searchResults = await Imgur.search(req.params.param, null /* , userIP */ )
    res.json(searchResults)
  }
}))

// Do something with the caught errors from Helpers.asyncErrorCatcher()
app.use((err, req, res, next) => {  
  console.error(`Application Error: ${err.stack}`)
  res.json({Error: 'An Application Error has occured, please see the server logs for details'})
})

// Listen for requests and saves the DB collection information if this is the first connection
const server = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + server.address().port);
  if (!initialized) {
    Database.connect()
    .then(() => {
      initialized = true
    })
    .catch((err) => {
      console.error('Database Connection Error: ' + err.stack)
      server.close(
        console.error('Server Closed')
      )
    })
  }
})