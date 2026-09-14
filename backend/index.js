const dotenv = require("dotenv");
const express = require("express");
const { security } = require("./middleware/security_library");
const { limiter } = require("./middleware/limiter");

const app = express();

dotenv.config();

// Body Parser
app.use(express.json({limit:"2kb"}));
app.use(express.urlencoded({ extended: true, limit: "2kb" }));

// SECURITY
security(app);

// Routes
app.use("/car-path", limiter, require("./routes/CarRoute"));

//contact route
app.use("/api", limiter, require("./routes/ContactRoute"));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});