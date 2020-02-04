var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

// body parser makes it easy for back and front end to talk to each other
app.use(bodyParser.urlencoded({extended: true}));

// parsing custom json types as json
app.use(bodyParser.json({type: 'application/*+json'}));

// parsing into a buffer
app.use(bodyParser.raw({type: 'application/vnd.custom-type'}));

// parsing html into a string
app.use(bodyParser.text({type: 'text/html'}));

// require path to Routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

app.listen(PORT, function() {
  console.log("app is listening on PORT: " + PORT);
});