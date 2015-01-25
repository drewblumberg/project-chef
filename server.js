var express        = require('express');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path           = require('path');
var logger         = require('morgan');


var db = require('./config/db');
var port = process.env.PORT || 8080;
// mongoose.connect(db.url);
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));


require('./app/routes')(app); // configure our routes

app.listen(port);
console.log('Server running on ' + port);

exports = module.exports = app;
