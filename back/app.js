const express = require('express');
const passport = require('passport');

const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');

const authRouter = require('./routes/auth');
const videoRouter = require('./routes/video');
const videosRouter = require('./routes/videos');
const userRouter = require('./routes/user');
const db = require('./models');
const passportConfig = require('./passport');

dotenv.config();
const app = express();
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
passportConfig();

app.use(morgan('dev'))
app.use(cors({
  allowedHeaders: ['Content-Type'],
  origin: true,
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session());
app.use(passport.initialize());
app.use(passport.session({
  saveUninitialized: false,
  resave: false,
  secret: process.env.COOKIE_SECRET,
}));



app.use('/videos',videosRouter);
app.use('/video',videoRouter);
app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(3065, () => {
  console.log('서버 실행 중 port:3065');
});