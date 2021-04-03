const express = require('express');
const db = require('./models');
const app = express();
const musicRouter = require('./routes/music');
const userRouter = require('./routes/user');

db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);


app.use('/music',musicRouter);
app.use('/user', userRouter);


app.listen(3065, () => {
  console.log('서버 실행 중');
});