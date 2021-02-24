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

// Connect to the database //
const connection = mysql.createConnection({
    host: "localhost",
    user: "contacts",
    password: "password",
    database: "contacts"
})

connection.connect();

// Handle GET requests to homepage //
app.get("/", (req, res) => {
    connection.query("SELECT name, email, phone, notes FROM people", (err, result) => {
        res.render("Assignment4.ejs", {people: result});
    })
})

// Create post handler //
app.post("/create_contact", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var phone = req.body.phone;
    var notes = req.body.notes;

    connection.query(
        "INSERT INTO people(name, email, phone, notes) VALUES (?, ?, ?, ?)",
        [name, email, phone, notes]
    )

    res.redirect("/");
})

// Starts the application //
app.listen(port);