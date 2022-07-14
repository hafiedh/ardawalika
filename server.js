const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const router = require("./routes/index");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const session = require("express-session");
const MemoryStore = require('memorystore')(session)

app.use(cors());
app.use(express.static("views/assets"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    cookie: { maxAge: 600000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: "ardawalika",
    saveUninitialized: true,
    resave: false
  })
);
app.use(methodOverride("_method"));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
