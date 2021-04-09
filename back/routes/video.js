const express = require('express');
const { Video, User } = require('../models');

const router = express.Router();


router.get('/', async (req, res, next) => { // GET /videos
  try {
    if (req.user) {
      const myVideo = await Video.findOne({
        where: {
          UserId: req.user.id,
          id: parseInt(req.query.id, 10),
        },
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

router.post('/add', async (req, res, next) => { // POST /video/add @음악추가
  try {
    if (req.user) { 
      await Video.create({
        title: req.body.title,
        author: req.body.author,
        videoId: req.body.videoId,
        duration: req.body.duration,
        UserId: req.body.UserId,

      });
      const addVideo = await Video.findOne({
        where: { 
          UserId: req.user.id, 
          VideoId: req.body.videoId 
        }
      });
      return res.status(201).json(addVideo);

    } else {
      return res.status(200).json(null);  
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/update', (req, res) => { // POST /video/update @음악수정
  
});

router.delete('/', (req, res) => { // DELETE /video/ @음악제거
  res.json('제거 완료');
});


module.exports = router;

