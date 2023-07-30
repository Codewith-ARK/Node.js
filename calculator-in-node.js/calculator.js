const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  let sum = Number(req.body['num1']) + Number(req.body['num2']);
  res.send(`your sum is ${sum} <br /> <a href="/"><< Go Back</a>`);
  console.log(req.body['num1']);
});

app.listen(port, () => {
  console.log("Server started at port:", port);
});