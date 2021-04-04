const express = require('express');
const bcrypt = require('bcrypt');
const password = require('passport');
const { User } = require('../models');

const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/login', isNotLoggedIn, (req, res, next) => {
  password.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(error);
      return next(err);
    }
    if (info) { 
      return res.status(401).send(info.reason);
    }
    return req.login(user, async(loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWidthPassword = await User.findOne({
        where: {id: user.id },
        attributes: {
          exclude: ['password'],
        }
      });
      return res.status(200).json(fullUserWidthPassword);
    })
  })(req, res, next);
});

router.post('/signup', isNotLoggedIn, async(req, res, next) => { // POST /user  @회원가입
  try {
    const exUser = await User.findOne({
      where: { email: req.body.email }
    });

    if (exUser) {
      return res.status(403).send('이미 사용중인 아이디입니다.');
    }

    const hasedPassword = await bcrypt.hash(req.body.password, 12);
    await User.create({
      email: req.body.email,
      password: hasedPassword,
      age: req.body.age,
      gender: req.body.gender,
      nickname: req.body.nickname,
    });  
    res.status(201).send('ok');

  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.post('/logout', isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('ok');
});

module.exports = router;