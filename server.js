const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.use(express.static(path.join(__dirname,"client", "build" , "index.html")));

app.get("/api/test", (req, res) => {
    res.send("Test end point")
});

// app.get("/", (req, res) => {
//     res.send("Hello world");
//     // res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "client", "build", "index.html"));
//     // res.sendFile("Fuck Yall");
//   });
}



app.listen(port, () => console.log("Server started on port " + port));