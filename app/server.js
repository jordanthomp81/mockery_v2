var express = require('express');
var app = express();
var apirouter = require('../routes/apirouter');
var webrouter = require('../routes/webrouter.js')
var mongoose = require('mongoose');

mongoose.connect('mongodb://testuser:password@ds143767.mlab.com:43767/mockery_test');

app.use(express.static('./static'));
app.use('/api', apirouter);
app.use('/', webrouter);

app.listen(3000);
console.log("Express server listening on port 3000");