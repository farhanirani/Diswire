const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
require("dotenv").config();

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
  connectionLimit: 10,
  queueLimit: 0,
});
const db = pool.promise();

const routes = require("./routes");
app.use("/api", routes);

app.listen(PORT, async () => {
  console.log("Server Running on port " + PORT);
  app.locals.db = db;
});
