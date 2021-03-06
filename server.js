var express = require('express'),
	app  = express(),
	path = require('path')
	cors = require('cors');

console.log(__dirname);


var dirpath = path.join(__dirname, "/app");

app.use(cors());

app.use(express.static(dirpath));

app.get('/*', function(req, res){
	res.sendFile('index.html', { root: dirpath });
});

app.listen(9000);