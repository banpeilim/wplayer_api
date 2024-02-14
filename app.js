const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors"); // Import the cors middleware
require("dotenv").config();

const app = express();

// Connect to database
mongoose
  .connect(process.env.DB_URI, {})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Failed to connect to database", err);
  });

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware to enable CORS

// Routes
const routes = require("./routes");
app.use("/api", routes);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`My Server is running on port ${PORT}.`);
});
