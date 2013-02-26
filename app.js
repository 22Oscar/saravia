
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/pagina1',function (req, res){
  res.render('pagina1',{ title: 'Batman. ' });
 
app.get('/pagina2',function (req, res){
  res.render('pagina2',{ title: 'Batman. ' });
  });
app.get('/pagina3',function (req, res){
  res.render('pagina3',{ title: 'Batman. ' });
  });
 app.get('/pagina4',function (req, res){
  res.render('pagina4',{ title: 'Batman. ' });
  });
  });


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});