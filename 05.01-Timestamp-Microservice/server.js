const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require('cors');
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/api/timestamp', (req, res) => {
  const date = new Date();
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

app.get('/api/timestamp/:date_str?', function (req, res) {
  const { date_str } = req.params;

  let date = new Date(date_str);

  // check if it is a unix timestamp...
  let unixTimestamp = parseInt(date_str * 1);
  if (isNaN(unixTimestamp)) {
    // it's not a unix timestamp string
    date = new Date(date_str);
  } else {
    // it is a timestamp
    date = new Date(unixTimestamp);
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
app.use(function (req, res, next) {
  res.status(404).type('text').send('Not Found');
});

// listen for requests :)
app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port 3000');
});
