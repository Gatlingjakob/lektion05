const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended : true}));

app.get('/', function (req, res) {
    res.send('<h1>Hello from root</h1>');
});

app.get('/testdigselv', function (req, res) {
    res.send('Du vandt!');
});

app.get('/login', function (req, res) {
    res.sendFile( path + 'login.html', function (err) {
        //Her kan man handle errors
    });
});

app.post('/login', function (req, res) {
   
    // console.log(req.body.user);
    // console.log(req.body.password);

    if (req.body.user === 'jaks'){
        res.sendFile( path + 'verysecret.html', function (err) {
            
        })
    } else
    res.sendFile( path + 'login.html', function (err) {
        //Her kan man handle errors
    });


})

app.listen(3000);