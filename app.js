// APP

const express = require("./lib/express.js");
const router = require("./lib/router");
const http = require("http");
const gitWrapper = require("./lib/githubAPI_wrapper.js");
const fs = require("fs");
let commitFeed = require("./data/commits.json");

let app = express();
let port = 3000;
let host = "localhost";

// Use the router to register callbacks
// for paths and HTTP verbs
app.get("/", (req, res) => {
  console.log("inside get");
  res.writeHead(200, {
    "Content-Type": "text/html"
  });
  fs.readFile("./views/index.html", "utf8", (err, data) => {
    if (err) throw err;
    let newData = data.replace(
      `{{commitFeed}}`,
      JSON.stringify(commitFeed, null, 2)
    );
    res.write(newData);
    res.end();
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
