const express = require('express');

const router = express.Router();


router.get('/', (req, res) => { // GET /user
  res.send('Get User');
});

router.post('/', (req, res) => { // POST /user
  res.send('Add User');
});

router.delete('/', (req, res) => { // DELETE /user
  res.send('Delete user');
});


module.exports = router;