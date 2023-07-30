const express = require("express");
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1><a href='/contact'>Contact >></a>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me!</h1> <li>+92 312 9052024</li> <li>khan456.tdm@gmail.com</li> <a href='/about'>About</a>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me!</h1> Hello👋🏻 My name is Abdul Rehman Khan.<br>I am a front-end developer trying to learn <b>Node.js</b> <br><a href='/'>Home >></a>");
});

app.get("/hobbies", (req, res) => {
  res.send("<h1>Hobbies</h1><li>Hobby 1</li><li>Hobby 1</li><li>Hobby 1</li>")
});

app.listen(port, () => {
  console.log("Sever started on", port);
})