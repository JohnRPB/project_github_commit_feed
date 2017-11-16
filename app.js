// APP

const express = require("./lib/express.js");
const router = require("./lib/router");
const http = require("http");
const gitWrapper = require("./lib/githubAPI_wrapper.js");
const fs = require("fs");
let commitFeed = require("./data/commits.json");
const querystring = require("querystring");
const url = require("url");

let app = express();
let port = 3000;
let host = "localhost";

// Use the router to register callbacks
// for paths and HTTP verbs
app.get("/", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile("./views/index.html", "utf8", (err, data) => {
    if (err) throw err;
    let params = querystring.parse(req.url);
    console.log(' ---------- params length ------------');
    console.log(params);
    if (Object.keys(params).length > 1) {
      gitWrapper.getCommits(params['/?username'], params['repo'])
        .then((resolved) => {
          console.log(resolved);
          fs.writeFile("data/commits.json", resolved, "utf8", (err) => {
            if (err) throw err;
              commitFeed = require("./data/commits.json");
              let newData = data.replace(
                `{{commitFeed}}`,
                 JSON.stringify(commitFeed, null, 2)
              );
              res.write(newData);
              res.end();
          })
        })
        .catch((rejected) => {
          throw "rejected";
        });
    } else {
    let newData = data.replace(
      `{{commitFeed}}`,
      JSON.stringify(commitFeed, null, 2)
    );
    res.write(newData);
    res.end();
    }
  });
});

app.get("/users", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  res.end("Hello POST!");
});

app.listen(port, host, () => {
  console.log(`server running at http://${host}:${port}/`);
});
