const express = require('express');
const { Video, User } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /videos
  try {
    if (req.user) {
      const where = {};
      if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
        where.UserId = req.user.id
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const myVideo = await Video.findAll({
        where,
        limit: 20,
        order: [['createdAt', 'DESC']],
        attributes: {
          exclude: ['UserId']
        },
        include: [{
          model: User,
          where: { id : req.user.id },
          attibutes: ['nickname'],
        }],
        
      });
      return res.status(201).json(myVideo);
    } else {
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;