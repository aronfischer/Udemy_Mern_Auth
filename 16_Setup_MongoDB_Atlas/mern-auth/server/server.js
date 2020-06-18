const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Intitialize our app
const app = express();

// Connect to MongoDB Atlas
mongoose
  .connect(process.env.DATABASE_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Counldn't connect to MongoDB Atlas", error);
  });

// Import routes
const authRoutes = require("./routes/auth");

// App middleware
app.use(bodyParser.json());
// app.use(cors());
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: "http://localhost:3000" }));
}

// Apply middleware
app.use("/api", authRoutes);

// App listens to
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
