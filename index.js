const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = __dirname + '/public/';

app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static('staticFiles'));

// app.get('/', function (req, res) {
//     res.send('<h1>Hello from root</h1>');
// });

app.get('/', function (req, res) {
    res.sendFile( path + 'keaEvents.html', function (err) {
        //Her kan man handle errors
        console.error(err.stack)
        res.status(500).send('Something broke!')
    });
});

app.get('/testdigselv', function (req, res) {
    res.send('Du vandt!');
});

app.get('/login', function (req, res) {
    res.sendFile( path + 'login.html', function (err) {
        //Her kan man handle errors
        console.error(err.stack)
        res.status(500).send('Something broke!')
    });
});

app.post('/login', function (req, res) {
   
    // console.log(req.body.user);
    // console.log(req.body.password);

    if (req.body.user === 'user'){
        res.sendFile( path + 'verysecret.html', function (err) {
            console.error(err.stack)
            res.status(500).send('Something broke!')
        })
    } else
    res.sendFile( path + 'login.html', function (err) {
        //Her kan man handle errors
        console.error(err.stack)
        res.status(500).send('Something broke!')
    });


})

app.listen(3000);