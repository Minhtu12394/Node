var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');

//conect to db
mongoose.connect(config.database, {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connect to MongoDB");
});

// Init app
var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'NodeJS'
  });
});

// Start the server
var port = 3001;
app.listen(port, function(){
  console.log('Server started on port' + port);
});
