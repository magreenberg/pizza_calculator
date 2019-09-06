var express = require('express')
var bodyParser = require('body-parser')
var slices_per_pizza = 1; // personal size

var app = express()

app.listen(8080, function(){
    console.log('Running on 8080');
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('images'));

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    response.render('hello');
})

app.get('/calculate', function(request, response) {
    var hungry_engineers = parseInt(request.query.hungry_engineers);
    var slices = parseInt(request.query.slices);


    if (isNaN(hungry_engineers)) {
    	respons.sent("Number of hungry engineers is not valid.")
    } else if (isNaN(slices)) {
        response.send('Number of slices per engineer is not valid.')
    } else {
    	var tot_slices = hungry_engineers * slices;
    	var tot_pizzas = tot_slices / slices_per_pizza

        var answer = 'For ' + (hungry_engineers).toString() + ' hungry engineers order ' + (tot_pizzas).toString() + ' pizzas.';

        response.send(answer.fontsize(20));
    }
})




