var express = require('express');
var path = require('path');
var app = express();
var port = 8080;

app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));

app.use('/api', require('./api'));

app.listen(port);
console.log('server running on ' + port)
