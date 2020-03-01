var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;

// body parser makes it easy for back and front end to talk to each other
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// require path to Routes
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
app.get('*', function(req, res) {
  res.redirect('/');
})

app.listen(PORT, function () {
  console.log("app is listening on PORT: " + PORT);
});