// Import express //
const express = require("express");

// Import MySQL //
const mysql = require("mysql");

// Import path utilities //
const path = require('path');

// Creating the app for express //
const app = express()

// Set the view engine //
app.set("view engine", "ejs");

// Add the public folder to the app //
app.use(express.static(path.join(__dirname, 'public')))

// Handle body data //
app.use(express.urlencoded())

// Set the port //
const port = 3005;

// Handle GET requests to homepage //
app.get("/", (req, res) => {
    res.render("Assignment4.ejs");
})

// Create post handler //


// Starts the application //
app.listen(port);