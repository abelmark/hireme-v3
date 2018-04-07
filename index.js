const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser')
const keys = require('./config/keys')
require('./models/User');
require('./services/passport')
// require('./services/mailchimp');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/mailChimpRoutes")(app);

if (process.env.NODE_ENV === "production") {
  // Express will server up production assets
  // like our main.js file or main.css file
  app.use(express.static("client/build"));

  // Express will server up the index.html if it doesn't
  // recoginize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = (process.env.PORT || 5000);
app.listen(PORT, () => {
  console.log(`You are listening to the smooth sounds of port ${PORT}`)
});
