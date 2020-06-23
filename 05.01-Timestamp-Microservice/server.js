const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// your first API endpoint...
app.get('/api/hello', function (req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/timestamp/:date?', function (req, res) {
  let date = null;

  // parse the date string
  if (req.params.date !== undefined) {
    // check if it is a unix timestamp...
    let unixTimestamp = parseInt(req.params.date * 1);
    if (isNaN(unixTimestamp)) {
      // it's not a unix timestamp string
      date = new Date(req.params.date);
    } else {
      // it is a timestamp
      date = new Date(unixTimestamp);
    }
  } else {
    // the date string parameter is empty.
    // create a new date based on current time
    date = new Date(Date.now());
  }

  // Initialize the resonse object, if Date is invalid
  // this one will be returned
  let response =
    date == 'Invalid Date'
      ? { error: 'Invalid Date' }
      : {
          unix: date.getTime(),
          utc: date.toUTCString(),
        };

  res.json(response);
});

// 404 Not Found Middleware
app.use(function(req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

// listen for requests :)
app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port 3000');
});