const express = require('express');

const router = express.Router();


router.get('/', (req, res) => { // GET /music
  res.json([
    {
      id: 1,
      title: 'Photograph',
      author: 'offonoff',
      writter: '우주인',
      link: '2b1E-zu-QEM',
      type: 0
    }, {
      id: 2,
      title: 'Slow dancing in the dark',
      author: 'Joji',
      writter: '우주인',
      link: 'K3Qzzggn--s',
      type: 0
    }, {
      id: 3,
      title: '5초 샘플입니다.',
      author: '5초',
      writter: '우주인',
      link: 'Jv8YaypLNBc',
      type: 0
    }, {
      id: 4,
      title: 'Sanctuary',
      author: 'Joji',
      writter: '우주인',
      link: '5-uWlFq380M',
      type: 0
    }, {
      id: 5,
      title: 'Liar',
      author: 'Taek ',
      writter: '우주인',
      link: 'XP0lIqnvFCY',
      type: 0
    }
  ]);
});
router.post('/', (req, res) => { // POST /music
  res.json('추가 완료');
});

router.delete('/', (req, res) => { // DELETE /music
  res.json('제거 완료');
});


module.exports = router;

