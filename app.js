const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(express.json());

// Simple route
app.get("/", (req, res) => {
  res.send("Hello,Your Node.js app is running.");
});

// Another route
app.get("/about", (req, res) => {
  res.send("This is a simple Node.js!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
