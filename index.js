var express = require('express'); 
var server = express(); 
var options = { index: ['index.html','hostingstart.html'] }; 
server.use('/', express.static('/home/site/wwwroot/tutorial', options)); 
server.listen(process.env.PORT);