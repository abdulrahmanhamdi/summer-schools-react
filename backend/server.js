const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); 

const universityRoutes = require("./routes/universities");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/universities", universityRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
