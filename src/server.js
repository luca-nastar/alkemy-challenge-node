const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load Routes
const userRoutes = require("./Routes/users");
const characterRoutes = require("./Routes/characters");

// Basic Routes
app.use("/auth", userRoutes);
app.use("/api", characterRoutes);

module.exports = app;
