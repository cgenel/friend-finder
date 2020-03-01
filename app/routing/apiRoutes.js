var friends = require("../data/friends");

// API GET Requests
// Below code handles when users "visit" a page.
module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  // taking the user's results from the survey using POST
  app.post("/api/friends", function (req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };
    console.log(req.body)

    var userData = req.body;
    var userScores = userData.scores;
    console.log(userScores);

    // calculating the difference between user score and other users scores
    var totalDifference = 0;

    // nested for loop to go through each friend and loop through thier score array to find best match
    // loop through all of the friends [i]
    for (var i = 0; i < friends.length; i++) {
      console.log(friends[i]);
      totalDifference = 0;

      // loop through all the scores [j]
      for (var j = 0; j < friends[i].scores[j]; j++) {
        // calculate the total difference between the scores and add them together
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

        // calculate the sum between the differences the find the best match
        if (totalDifference <= bestMatch.friendDifference) {

          // best match is the new friend!
          bestMatch.name = friends[i].name;
          bestMatch.photo = friends[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }
    // save the user data into the database always AFTER the check
    friends.push(req.body);

    // return json with the bestMatch to the front end
    res.json(bestMatch);
    console.log(bestMatch);
  });
};