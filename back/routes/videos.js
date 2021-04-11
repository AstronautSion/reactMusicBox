const express = require('express');
const { Video, User } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

router.get('/', async (req, res, next) => { // GET /videos
  try {
    if (req.user) {
      const where = {}; 
      where.UserId = req.user.id
      if (req.query.word !== 'undefined') {
        Object.assign(where,{
          [Op.or]: [{
            title: {[Op.like]: `%${req.query.word}%`}
          },{
            author: {[Op.like]: `%${req.query.word}%`}
          }]
        });
      }
      if (parseInt(req.query.lastId, 10)) {
        where.id = {[Op.lt]: parseInt(req.query.lastId, 10)}
      }
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