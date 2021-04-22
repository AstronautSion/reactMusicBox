const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models");

module.exports = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
      },
      async (accessToken, refreshToken, profile, cb) => {
        try {
          const userGoogle = await User.findOne({
            where: {
              oauthId: profile.id,
            },
          });
          if (!userGoogle) {
            await User.create({
              email: profile.emails[0].value,
              oauthId: profile.id,
              nickname: profile.displayName,
              types: "google",
            });
            return cb(null, profile);
          }
          return cb(null, profile);
        } catch (error) {
          if (error.parent.code === "ER_DUP_ENTRY") {
            const errorMage = {
              errorCode: error.parent.code,
            };
            return cb(null, errorMage);
          } else {
            console.error(error);
            return cb(null, error);
          }
        }
      }
    )
  );
};
