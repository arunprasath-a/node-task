var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

//for pug
app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(upload.array());
app.use(express.static('public'));


//page rendering
app.get('/', function (request, response) {
    response.render('form');
});



app.post('/', function (request, response) {
    console.log(request.body);
    response.write('<html>');
    response.write('<body>');
    response.write('<h3>Welcome to the page!</h3>');
    response.write(`hii ${request.body.Username}`+"<br><br>"+"<a href='/logout'>Log out</a>");
    response.write('<br><br>');
    response.write('</body>');
    response.write('</html>');
    response.end();

});

app.get('/logout', function (request, response) {
   response.redirect("/");
});

app.listen(3000);