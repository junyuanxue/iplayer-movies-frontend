var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', index);

app.listen(port, function () {
  console.log('App listening on port ' + port);
});

module.exports = app;
