// Import required modules
const express = require("express"); // Express.js framework for building web applications
const https = require("https"); // Module for making HTTPS requests
const bodyParser = require("body-parser"); // Middleware for parsing request bodies
const app = express(); // Create an Express application
const port = 3000; // Port on which the server will listen

// Variables to store weather data
let location, temperature, weatherDesc, icon;

// Configure bodyParser middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html"); // Send the HTML file located in the same directory as the script
});

// Define a route for handling POST requests
app.post("/", (req, res) => {
  location = req.body['city-name']; // Get the value of the 'city-name' field from the POST request
  console.log(location);

  // Construct the URL for the OpenWeatherMap API request
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=e0924080cf9b524ffb0223b2d9263431`;

  // Make an HTTPS GET request to the OpenWeatherMap API
  https.get(url, (response) => {
    response.on("data", (data) => {
      const weatherData = JSON.parse(data); // Parse the received JSON data
      temperature = weatherData.main.temp; // Extract temperature from the response
      weatherDesc = weatherData.weather[0].description; // Extract weather description
      icon = weatherData.weather[0].icon; // Extract weather icon code
    });
  });

  // Construct HTML response with weather data
  let html = `
  <h1>Current weather in: ${location} is ${temperature}C\u00B0 with ${weatherDesc}</h1>\n
  <img src="https://openweathermap.org/img/wn/${icon}@2x.png"></img><br>
  <a href='/'>Return to Homepage</a>\n
  `;

  // Send the HTML response to the client
  res.send(html);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log("Server started at:", port);
});