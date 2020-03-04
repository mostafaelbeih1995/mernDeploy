const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("HEllo world");
});

const port = process.env.port || 5000;

app.listen(port, () => console.log("Server started on port " + port));