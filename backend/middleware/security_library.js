const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression"); 
const { v4: uuidv4 } = require("uuid");
const winston = require("winston");
const dotenv = require("dotenv");
// const { xss } = require("express-xss-sanitizer");

dotenv.config();


// Logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console()
  ]
});


// Security function
const security = (app) => {

  app.use(helmet());

  app.use(compression());

  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true
    })
  );  

  // app.use(xss());

  // Request ID + logging
  app.use((req, res, next) => {

    req.requestId = uuidv4();

    logger.info({
      requestId: req.requestId,
      method: req.method,
      url: req.originalUrl
    });

    next();
  });
};


module.exports = {
  security,
  logger
};