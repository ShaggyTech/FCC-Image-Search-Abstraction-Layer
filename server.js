'require strict'

// NPM Packages and other 
const express = require('express'),
      Database = require('./modules/database'),  // Database functions
      Helpers = require('./modules/helpers'),
      Imgur = require('./modules/imgur'),
      app = express();

// Lets us know if Database.connect() has been called once since the app started
let initialized = false;

// Static Home page
app.use(express.static('public'));

app.get('/api', Helpers.asyncErrorCatcher(async (req, res, next) => {
  Imgur.searchGalleries("lol cats", 1)
  .then((imgurResponse) => {
    res.send(imgurResponse)
  }).catch(next)
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