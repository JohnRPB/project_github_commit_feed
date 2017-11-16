let Github = require('github');

let github = new Github();

github.authenticate({
    type: "token",
    token: "548a1d459369737be08911c7f25ec0fa3d6f6a5f"
});

github.repos.getCommit({
  owner: "johnrpb",
  repo:"https://github.com/JohnRPB/assignment_building_the_express_router" 
});

console.log(github.repos);



