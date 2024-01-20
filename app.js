const express = require('express');


const app = express();


// Define port to listen on. Default port is 8080. 
const port = process.env.PORT || 9000;


// Listen on defined port 
app.listen(port, function () {
	console.log('Server running at http://127.0.0.1:' + port + '/');
});
