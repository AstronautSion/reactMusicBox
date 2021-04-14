const express = require('express');
const passport = require('passport');
const router = express.Router();

const frontUrl = 'http://localhost:3000';

router.get('/google/callback', passport.authenticate('google', { 
  failureRedirect: frontUrl,
}), async (req, res) => {
  res.redirect(`${frontUrl}/api/google?auth=${req.headers.cookie}`);
});

router.get('/google', passport.authenticate('google', { scope: ['email', 'profile'] }));

module.exports = router;