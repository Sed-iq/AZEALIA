const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.post("/email", (req, res) => {});
app.use("/", express.static(__dirname));
app.listen(process.env.PORT || 5000, console.log("Server is running"));
