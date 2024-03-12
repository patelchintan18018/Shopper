// index.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8080;
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://backend:backend123@cluster0.e1t0luz.mongodb.net/ecommerce");

app.use(express.static(path.join(__dirname, "./frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
});

app.use("/api", authRoutes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server running on ${PORT}....`);
  } else {
    console.log("Error : " + err);
  }
});
