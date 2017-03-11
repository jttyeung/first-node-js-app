var express = require('express') // not a relative path so it looks in the node_modules file

// app variable
    // used to
        // listen for HTTP request
        // start server
var app = express() // invoke express as an app

// specify that the app is listening for a get request
app.get('/', function(request, response) {
    response.send('Hello Elie!');
})
// respond with a callback with (request, response) or shorthand: (req, res)

app.get('/joanne', function(request, response) {
    response.send('Hello Joanne!');
})


// tell your server to start, give it a message
app.listen(3000, function(){
    console.log('Running on 3000');
})
