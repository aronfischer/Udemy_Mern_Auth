const express = require("express");

// Intitialize our app
const app = express();

// Import routes
const authRoutes = require("./routes/auth");

// Apply middleware
app.use("/api", authRoutes);

// App listens to
const port = 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
