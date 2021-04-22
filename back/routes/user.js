const express = require("express");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { User } = require("../models");

const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.get("/", async (req, res, next) => {
  // GET /user  @유저정보 불러오기
  try {
    if (req.user && req.user.id) {
      console.log("???너가 거기 왜들어가");
      const fullUserWidthPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(fullUserWidthPassword);
    } else {
      return res.status(200).send(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/login", isNotLoggedIn, (req, res, next) => {
  // POST /user/login @로그인
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error(error);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWidthPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(fullUserWidthPassword);
    });
  })(req, res, next);
});

router.post("/signup", isNotLoggedIn, async (req, res, next) => {
  // POST /user  @회원가입
  try {
    const exUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다.");
    }

    const hasedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      password: hasedPassword,
      age: req.body.age,
      gender: req.body.gender,
      nickname: req.body.nickname,
    });
    res.status(201).send("ok");
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/logout", isLoggedIn, (req, res) => {
  // POST /user/logout @로그아웃
  req.logout();
  req.session.destroy();
  res.send("ok");
});

router.post("/update", isLoggedIn, async (req, res, next) => {
  // POST /user/update @회원정보수정
  try {
    if (req.user) {
      await User.update(
        {
          nickname: req.body.nickname,
          age: req.body.age,
          gender: req.body.gender,
        },
        {
          where: { id: req.user.id },
        }
      );

      res.status(200).json(req.body);
    } else {
      res.status(200).send(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
