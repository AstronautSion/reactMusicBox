const passport = require("passport");
const local = require("./local");
const { User } = require("../models");
const google = require("./google");
module.exports = () => {
  passport.serializeUser((user, done) => {
    // Strategy 성공 시 호출됨
    done(null, user); //여기의 user.id가 req.session.passport.user에 저장
  });

  passport.deserializeUser(async (user, done) => {
    // 매개변수 id는 req.session.passport.user에 저장된 값
    if (user.errorCode) {
      return done(null, user);
    } else {
      let where = {};
      if (user.provider) {
        where.oauthId = user.id;
      } else {
        where.id = user.id;
      }

      try {
        const user = await User.findOne({ where });
        done(null, user); // 여기의 user가 req.user가 됨
      } catch (error) {
        console.error(error);
        done(null, error);
      }
    }
  });

  local();
  google();
};
