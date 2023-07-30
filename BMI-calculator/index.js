const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }))
let weight, height;

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
  // Get the height from the user form input
  height = Number(req.body['height'] / 100);

  // Get the weight from the user form input
  weight = Number(req.body['weight']);
  
  // calculate the BMI and then format the output to only have 2 numbers after the decimal
  BMI = (weight / (height ** 2)).toFixed(2);

  // send the formatted response back to the browser
  res.send(`<p style="font-size:1.25rem;">Your BMI is <b>${BMI}</b></p>
    <a href="/"><< Go Back</a>
  `);
})

app.listen(port, () => {
  console.log("Server started at port:", port);
})