var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({extended: false})

// parsing custom json types as json
app.use(bodyParser.json({type: "application/*+json"}))

// parsing into a buffer
app.use(bodyParser.raw({type: "application/vnd.custom-type"}))

// parsing html into a string
app.use(bodyParser.text({type: "text/html"}))

require("../app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
  console.log("app is listening on PORT: " + PORT);
});