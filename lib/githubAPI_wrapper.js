let Github = require("github");
let github = new Github();

// Hai's
// 59f60202621a52e6932200b3df70abfa2196da9e
// Johann's
// 548a1d459369737be08911c7f25ec0fa3d6f6a5f

let gitWrapper = {};

gitWrapper.getCommits = (user, repo) => {
  let token;
  switch (user) {
    case "JohnRPB":
      token = "2458a5295faa740d1c14f08b3c5f00f8099694e1";
      break;
    case "memyselfandhai":
      token = "4c13546e26a630cfb569637bf6e1862bd68ebbad";
      break;
    default:
      throw "not a valid user";
      break;
  }
  github.authenticate({
    type: "token",
    token: token
  });

  return github.repos.getCommits({
    owner: user,
    repo: repo,
    sha: "master"
  });
};

gitWrapper
  .getCommits("memyselfandhai", "assignment_express_portfolio")
  .then(onfulfilled => {
    console.log(onfulfilled.data);
  })
  .catch(onRejected => {
    console.log(onRejected);
  });

module.exports = gitWrapper;
