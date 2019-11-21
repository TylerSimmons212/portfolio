require("dotenv").config();
const express = require("express");
const massive = require("massive");

const { SERVER_PORT, DB_CONNECTION} = process.env;

const app = express();


app.use(express.json());
app.use(require("body-parser").text());


massive(DB_CONNECTION).then(db => {
  app.set('db', db);
  app.listen(SERVER_PORT, () =>
  console.log(`Houston we have lift off on port ${SERVER_PORT}`)
  );
});