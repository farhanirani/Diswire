const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();
const path = require("path");

// app config
const app = express();
const PORT = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

const pool = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});
const db = pool.promise();

const routes = require("./routes");
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}

app.listen(PORT, async () => {
  console.log("Server Running on port " + PORT);
  app.locals.db = db;
});
