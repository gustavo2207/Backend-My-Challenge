const express = require("express");
const routes = require("./routes.js");

const cookieParser = require("cookie-parser");
const cors = require("cors");

require("./database");

const app = express();

app.use((req, res, next) => {
  cookieParser();
  res.header(
    "Access-Control-Allow-Origin",
    "http://mychallengefrontend.s3-website-sa-east-1.amazonaws.com/"
  );
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  cors();
  express.json();
  next();
});
app.use(routes);
app.listen(3333);
