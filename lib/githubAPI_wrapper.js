let Github = require("github");

let github = new Github();

// Hai's 
// 59f60202621a52e6932200b3df70abfa2196da9e 
// Johann's 
// 548a1d459369737be08911c7f25ec0fa3d6f6a5f

github.authenticate({
  type: "token",
  token: "548a1d459369737be08911c7f25ec0fa3d6f6a5f"
});

github.repos.getCommits({
  owner: "JohnRPB",
  repo: "assignment_building_the_express_router",
  sha: "master"
}, (err, data) => {
   if (err) throw err;
   console.log(data.data);
});

/*
commits
  .then(onfulfilled => {
    console.log(onfulfilled);
  })
  .catch(onRejected => {
    console.log(onRejected);
  });
*/

