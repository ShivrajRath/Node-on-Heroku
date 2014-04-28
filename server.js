/**
 * Express App
 */
var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

/**
 * On initial load
 * @return index.html
 */
app.get('/', function(){
	res.sendfile('index.html');
});

app.listen(process.env.PORT || 3000);