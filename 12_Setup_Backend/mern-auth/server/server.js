const express = require("express");

// Intitialize our app
const app = express();

// Handle get request
app.get("/", (req, res) => {
  res.send({ message: "Hello from the backend" });
});

// App listens to
const port = 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
