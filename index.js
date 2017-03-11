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

// colon : denotes a url parameter
app.get('/person/:name', function(request, response) {
    // get access to params
    var name = request.params.name
    response.send('Hi! ' + name);
})

app.get('/add/:num1/:num2', function(request, response) {
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1 + num2).toString();
        response.send(answer);
    }

})

app.get('/subtract/:num1/:num2', function(request, response) {
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1 - num2).toString();
        response.send(answer);
    }
})

app.get('/divide/:num1/:num2', function(request, response) {
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1/num2).toString();
        response.send(answer)
    }
})

app.get('/multiply/:num1/:num2', function(request, response) {
    var num1 = parseInt(request.params.num1);
    var num2 = parseInt(request.params.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1*num2).toString();
        response.send(answer)
    }
})

// tell your server to start, give it a message
app.listen(3000, function(){
    console.log('Running on 3000');
})

