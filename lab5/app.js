const express = require("express");
const app = express();
const configRoutes = require("./routes");

configRoutes(app);

app.listen(3000, () => {
  console.log("Server is now there! Yayyyyyy");
  console.log("Routes will be running on http://localhost:3000. Go check and see!");
});