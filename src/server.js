const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Load Routes
const userRoutes = require("./Routes/users");

// Basic Routes
app.use("/auth", userRoutes);

module.exports = app;
