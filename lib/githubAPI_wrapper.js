let Github = require("github");
let github = new Github();
require("dotenv").config();

let gitWrapper = {};

gitWrapper.getCommits = (user, repo) => {
  let token;
  switch (user) {
    case "JohnRPB":
      token = `${process.env.JOHANN_KEY}`;
      console.log(process.env.JOHANN_KEY);
      break;
    case "memyselfandhai":
      token = `${process.env.HAI_KEY}`;
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
  .getCommits("JohnRPB", "assignment_express_portfolio")
  .then(onfulfilled => {
    console.log(process.env.HAI_KEY);
    console.log(onfulfilled.data);
  })
  .catch(onRejected => {
    console.log(onRejected);
  });

module.exports = gitWrapper;
