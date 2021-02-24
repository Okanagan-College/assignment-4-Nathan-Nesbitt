// Import express //
const express = require("express");

// Import MySQL //
const mysql = require("mysql");

// Creating the app for express //
const app = express()

// Set the view engine //
app.set("view engine", "ejs");

// Handle body data //
app.use(express.urlencoded())

// Set the port //
const port = 3005;

// Handle GET requests to homepage //
app.get("/", (req, res) => {
    res.render("Assignment4.ejs");
})

// Starts the application //
app.listen(port);