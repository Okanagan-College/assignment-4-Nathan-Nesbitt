/**
 * Main File for Contacts Project / Backend
 */

// Import the node libraries //
const path = require("path");
const express = require("express");
const mysql = require("mysql");
const bodyParser = require('body-parser');

// Create our express application //
const app = express(); 

// Sets it so we can use ejs as our template engine //

// Set the static folder for CSS and JS files //
app.use(express.static(path.join(__dirname, 'public')));

// Allows Parsing of Fields //

// Port to run the app on //

// Create connection to database //

/* ROUTES */

// Handle Get Request to homepage a.k.a "/" //
app.get("/", (req, res, next) => {
    res.send("Hello")
})

// Handle POST Request to create contact a.k.a "/create_contact" //

// Start the app //
app.listen(3000);