let Github = require("github");

let github = new Github();

let results = github.authenticate({
  type: "token",
  token: "59f60202621a52e6932200b3df70abfa2196da9e"
});

let commits = github.repos.getCommit({
  owner: "JohnRPB",
  repo: "https://github.com/JohnRPB/assignment_building_the_express_router",
  sha: "master"
});

commits
  .then(onfulfilled => {
    console.log(onfulfilled);
  })
  .catch(onRejected => {
    console.log(onRejected);
  });

console.log("RESULTS: " + results);
