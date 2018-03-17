const passport = require("passport");
// const GoogleStrategy = require("passport-google-oauth20");
const GitHubStrategy = require('passport-github').Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((github_id, done) => {
  User.findById(github_id).then(user => {
    done(null, user);
  });
});


passport.use(
  new GitHubStrategy(
    {
      clientID: keys.githubClientID,
      clientSecret: keys.githubClientSecret,
      callbackURL: "http://localhost:5000/auth/github/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const info = profile._json;
      console.log('[profile]', profile)
      const existingUser = await User.findOne({ github_id: profile.id });
      console.log(existingUser ? existingUser : 'does not exist');

      if (existingUser) {
        console.log('exists!')
        return done(null, existingUser);
      }

      console.log('user created!')
      const user = await new User({ name: info.name, login: info.login, github_id: info.id, html_url: info.html_url, blog: info.blog, location: info.location, bio: info.bio, avatar_url: info.avatar_url }).save();
      done(null, user);
    }
  )
);
  
    // new GoogleStrategy(
  //   {
  //     clientID: keys.googleClientId,
  //     clientSecret: keys.googleClientSecret,
  //     callbackURL: "/auth/google/callback",
  //     proxy: true
  //   },
  //   async (accessToken, refreshToken, profile, done) => {
  //     const existingUser = await User.findOne({ googleId: profile.id });

  //     if (existingUser) {
  //       return done(null, existingUser);
  //     }

  //     const user = await new User({ googleId: profile.id }).save();
  //     done(null, user);
  //   }
  // )
