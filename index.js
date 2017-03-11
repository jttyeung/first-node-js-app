var express = require('express') // not a relative path so it looks in the node_modules file
var bodyParser = require('body-parser')

// app variable
    // used to
        // listen for HTTP request
        // start server
var app = express() // invoke express as an app

// body parser functions USEd in middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// SETs the template as the embedded javascript template, allows you to RENDER
app.set('view engine', 'ejs');


// specify that the app is listening for a get request
app.get('/', function(request, response) {
    response.render('hello'); // because the view engine is set to ejs, this is asking it to render hello.ejs even though we haven't added the extension
})
// respond with a callback with (request, response) or shorthand: (req, res)

app.get('/joanne', function(request, response) {
    response.render('Hello Joanne!');
})

// colon : denotes a url parameter
app.get('/person/:name', function(request, response) {
    // get access to params
    var name = request.params.name
    response.send('Hi! ' + name);
})

app.get('/login', function(request, response) {
    response.render('login');
})

app.post('/login', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    response.redirect('welcome');
})

app.get('/welcome', function(req, res) {
    res.send('logged in')
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

app.get('/add', function(request, response) {
    // URL paramenters => request.params
    // URL query => request.query
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);

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

app.get('/subtract', function(request, response) {
    // URL paramenters => request.params
    // URL query => request.query
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);

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

app.get('/divide', function(request, response) {
    // URL paramenters => request.params
    // URL query => request.query
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1 / num2).toString();
        response.send(answer);
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

app.get('/multiply', function(request, response) {
    // URL paramenters => request.params
    // URL query => request.query
    var num1 = parseInt(request.query.num1);
    var num2 = parseInt(request.query.num2);

    if (isNaN(num1) || isNaN(num2)) {
        response.send('Please enter valid numbers.')
    } else {
        var answer = (num1 * num2).toString();
        response.send(answer);
    }
})

// tell your server to start, give it a message
app.listen(3000, function(){
    console.log('Running on 3000');
})

