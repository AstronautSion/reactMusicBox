const express = require('express');
const { Music, User } = require('../models');
const { Op } = require('sequelize');

const router = express.Router();

router.post('/add', async (req, res, next) => { // POST /music/add @음악추가
  try {
    if (req.user) { 
      await Music.create({
        title: req.body.title,
        author: req.body.author,
        musicId: req.body.musicId,
        UserId: req.body.UserId,
      });
      const addMusic = await Music.findOne({
        where: { 
          UserId: req.user.id, 
          musicId: req.body.musicId 
        }
      });
      return res.status(201).json(addMusic);

    } else {
      return res.status(200).json(null);  
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/update', (req, res) => { // POST /music/update @음악수정
  
});

router.delete('/', (req, res) => { // DELETE /music/ @음악제거
  res.json('제거 완료');
});

router.get('/', async (req, res, next) => { // GET /music
  try {
    if (req.user) {
      const where = {};
      if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
        where.UserId = req.user.id
        where.id = { [Op.lt]: parseInt(req.query.lastId, 10)}
      } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
      const myMusic = await Music.findAll({
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
      return res.status(201).json(myMusic);
    } else {
      return res.status(200).json(null);
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;

