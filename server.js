var express = require('express'),
    bookings = require('./bookings'),
    app = express(),
    port = process.env.PORT || 3000;

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

app.get('/api/test', function(req, res) {
  res.send(new Date());
});

app.use(express.static(__dirname));
app.listen(port, function() { console.log('ready on port ', port); });

