process.env.NODE_ENV        = 'localhost';
process.env.NODE_CONFIG_DIR = 'config/';
config                      = require('config');

var express = require('express');
var app     = express();

var bodyParser    = require('body-parser');
mysql             = require('mysql');

var db            = require('./db-setting');

var multipart           = require('connect-multiparty');
var multipartMiddleware = multipart();

app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.set('json spaces', 1);

var customer = require('./routes/customer');

console.log("customer ====", customer);

app.post('/sign_up', customer.signup);


app.get('/Home', function (req, res) {
    res.render('index', { title: 'ALL API'});
});

app.get('/user_name',customer.getUserName);
app.get('/login',customer.login);
app.get('/profile', customer.profile);
app.post('/edit_profile', customer.edit_profile);
app.post('/logOut', customer.LogOut);
app.get('/access_token', customer.getAccessToken);
app.get('/dashboard', customer.dashboardInfo);

app.get('/', function (req, res) {
    res.send('Welcome to Homepage');
})


app.listen(config.get('portNo.port'));

console.log("Express Server is listening on server", config.get('portNo.port'));

