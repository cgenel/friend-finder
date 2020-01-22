var friends = require("../data/friends");

// API GET Requests
// Below code handles when users "visit" a page.
module.exports = function(app) {

  app.get("/api/friends", function(req, res){
    res.json(friends);
  });

};