const passport = require('passport');

module.exports = (app) => {
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["profile", "email"]
    })
  );
  
  app.get("/auth/github/callback", passport.authenticate("github"));

  app.get("/api/logout", (req, res) => {
    console.log("logging out");
    req.logout();
    res.send(req.user)
  })

  app.get('/api/current_user', (req, res) => {
    const user = req.user
    console.log('[current user]', user);
    res.send(user);
  })
}
