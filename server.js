var express = require('express'),
    bookings = require('./bookings'),
    app = express();

app.get('/api/2', function(req, res) {
  var data = [];
  for (var i = 10 - 1; i >= 0; i--) {
    data.push({id: i, title: 'title' + i, date: new Date()});
  }
  res.send(data);
});

app.get('/api/2-2', function(req, res) {
  res.send(bookings);
});

app.use(express.static(__dirname));
app.listen(3000, function() { console.log('ready'); });

