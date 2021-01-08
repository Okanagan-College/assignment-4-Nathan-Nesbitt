/**
 * Main File for Contacts Project / Backend
 */

// Import the node libraries //

const path = require("path")

// Create our express application //

// Sets it so we can use ejs as our template engine //

// Set the static folder for CSS and JS files //
app.use(express.static(path.join(__dirname, 'public')));

// Allows Parsing of Fields //

// Port to run the app on //

// Create connection to database //

/* ROUTES */

// Handle Get Request to homepage a.k.a "/" //

// Handle POST Request to create contact a.k.a "/create_contact" //

// Start the app //