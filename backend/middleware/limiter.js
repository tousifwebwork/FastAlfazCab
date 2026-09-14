
const rateLimit = require("express-rate-limit"); 


// Rate Limiter
exports.limiter = rateLimit({
  windowMs: 3 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Too many form submissions. Please try again later."
  },
  statusCode: 429
});