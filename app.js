var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views',[path.join(__dirname, 'views/'), path.join(__dirname, 'views/pages/'), path.join(__dirname, 'views/partials/')]);

app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.get('views');
app.use('/', index);
app.use('/users', users);

//MONGO
const MongoClient = require('mongodb').MongoClient;
var db;
var data;
var str = "";
var innerZone = "";

    MongoClient.connect('mongodb://broker:imbroker@ds153732.mlab.com:53732/stock-quotes', function(err, database) {
        // ... start the server
        if (err) return console.log(err);
        db = database;
        db.collection('zone').find().toArray(function (err, results) {
            if (err) return console.log(err);
            //console.log(results);
            str = JSON.stringify(results);
        });
        db.collection('innerZone').find().toArray(function (err, results) {
            if (err) return console.log(err);
            //console.log(results);
            innerZone = JSON.stringify(results);
        });
    });


//connectDB();

app.get('/map',function (req,res) {
    res.render('map.ejs',{ title: 'Express' });
});
app.get('/map2',function (req,res) {
  //connectDB();
    var data = JSON.parse(str);
    res.render('map2.ejs',{ data: data,title: 'OuterZone' });

});

app.get('/map3',function (req,res) {
    var data = JSON.parse(innerZone);
    res.render('mapInside.ejs',{data: data,title: 'InnerZone'});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
/*
var fs = require('fs');
var obj;
fs.readFile('./outsidex.geo.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
});*/


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
/*module.exports = {
    PROJECT_DIR : __dirname
};*/
