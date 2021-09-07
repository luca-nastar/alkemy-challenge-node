const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load Routes
const userRoutes = require("./Routes/users");
const characterRoutes = require("./Routes/characters");
const moviesRoutes = require("./Routes/movies");

// Basic Routes
app.use("/auth", userRoutes);
app.use("/api", characterRoutes);
app.use("/api", moviesRoutes);

module.exports = app;
