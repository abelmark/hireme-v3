const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );

  app.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      res.redirect("http://localhost:3000/");
    }
  );

  app.get(
    "/auth/linkedin/callback",
    passport.authenticate("linkedin"),
    (req, res) => {
      res.redirect("/");
    }
  );

  app.get(
    "/auth/linkedin",
    passport.authenticate(
      "linkedin",
      {
        scope: ["profile", "email"]
      },
      function(accessToken, refreshToken, profile, done) {
        // asynchronous verification, for effect...
        process.nextTick(function() {
          // To keep the example simple, the user's LinkedIn profile is returned to
          // represent the logged-in user. In a typical application, you would want
          // to associate the LinkedIn account with a user record in your database,
          // and return that user instead.
          return done(null, profile);
        });
      }
    )
  );

  app.get("/api/logout", (req, res) => {
    console.log("logging out");
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res) => {
    const user = req.user;
    console.log("[current user]", user);
    res.send(user);
  });
};
