// Loading the modules
var express = require('express');

// Add the EJS Nodule Module to the server
const ejs = require('ejs');

// Start the express
var app = express();

// Set the veiw engine to EJS
app.set('view engine', 'ejs');

// Render the static files
app.use(express.static('public'));
app.use(express.static("node_modules/bootstrap/dist/"));

// Port
app.listen(8080);

// Posting the index home page
app.get('/', function(req, res) {

    // rendering the index page
    res.render('pages/index')

});