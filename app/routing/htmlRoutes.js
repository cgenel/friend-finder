var path = require("path");

// HTML GET requests
// Below code handles when users "visit" a page.
module.exports = function (app) {
  app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.use(function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/home.html"));
  });
}