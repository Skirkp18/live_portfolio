// Dependencies
const express = require("express");
const chalk = require("chalk");
const compression = require('compression')

// Setting up port and requiring our models
const PORT = process.env.PORT || 8080;
// const db = require("./models");


// Setting up express and middleware
const app = express();
app.use(compression())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// handlebars
const exphbs = require("express-handlebars");

app.engine(
   "handlebars",
   exphbs({
      defaultLayout: "main",
      partialsDir: __dirname + "/views/partials/"
   })
);
app.set("view engine", "handlebars");


//  Requiring routes

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

// Start listening
app.listen(PORT, () => {
    console.log(chalk.blue("==> 🌎  Listening on port %s. Visit http://localhost:8080/ in your browser."));
});

