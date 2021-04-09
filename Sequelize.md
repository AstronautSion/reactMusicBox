# Sequelize

## Sequelize 설치
<br>

```
npm i sequelize sequelize-cli mysql2
```
```
npx sequelize init
```
위의 명령어로 sequelize 세팅을 한다. <br>
`config`, `models`, `migrations`, `seeders` 폴더 생성됨.

```

|--config
    `--config.json
|--models
    `--index.js
|--migrations
|--seeders

```
<br>

### config > config.json
```json
{
  "development": {
    "username": "root",
    "password": "password",
    "database": "batabase name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": "password",
    "database": "batabase name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": "password",
    "database": "batabase name",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
생성된 `config > config.json` 에서 development, test, production에 관한 정보를 업데이트 해준다.
<br><br><br>

### `models > index.js`
```js
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.User = require('./user')(sequelize, Sequelize);
db.Video = require('./video')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);


Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

```
`models > index.js` 에서 `config.json`의 정보를 가져와 연결해주고, <br>
필요한 models들을 시퀄라이즈에 등록해준다. <br>
ex)) `db.User = require('./user')(sequelize, Sequelize)` 

<br><br>

## Model definition

Object를  Mysql에 매핑 해주기 위해서는 Object에 대한 Definition을 지정해야 한다.

### `user.js`
```js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', { //MySQL에서는 users 테이블 생성
    // id가 기본적으로 들어있다.
    email: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    { .... }

  },{
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });

  User.associate = (db) => {
    db.User.hasMay(db.Video);
  };

  return User;
}
```
<br><br>

## Data Type (Mysql)
Sequelize에서 제공하는 Mysql의 데이터 타입은 다음과 같다. <br>
이 외에도 많은 데이터 타입을 지원한다.<br>
[Data Types 확인하기](https://sequelize.org/master/manual/model-basics.html#data-types)



```
STRING => VARCHAR(255)
STRING(1234) => VARCHAR(1234)
STRING.BINARY => VARCHAR BINARY
TEXT => TEXT
TEXT('tiny') => TINYTEXT
INTEGER
BIGINT
BIGINT(11)
FLOAT
FLOAT(11)
FLOAT(11, 12)  => FLAOT(11,12)
DOUBLE
DECIMAL
DATE(6) => mysql5.6.4+
DATEONLY
BOOLEAN
ENUM('value1', 'value2')
JSON
GEOMETRY
GEOMETRY('POINT')
GEOMETRY('POINT', 4326)
```
<br><br>


## Object Association


`1:1`, `1:N`, `N:M` 관계에 따라 associate로 각각의 테이블을 연결 해주어야 한다.

`hasOne` <br>
`hasMany` <br>
`belongsTo` <br>
`belongsToMany` <br>

------
<br><br>

### `One-To-One 관계`
1 대 1 관계는 서로 다른 두 개의 모델이 오직 하나의 foreign key로 연결 되어 있는 관계이다.
<br>

`hasOne()`, `belongsTo()` 
<br>
두가지 메소드는 모두 1:1 관계를 정의해주는 메소드다.
관계를 정의함에 있어서 각각의 메소드는 기준이 되는 모델이 다르다.
<br><br>
```js
Source.hasOne(Target) = Target.belongsTo(Source) 
```
`Source` 객체는 `Target`를 소유하고, `Target` 객체는 `Source` 객체에 포함된다.
<br>
또한, `foreignKey` 키워드를 통해 외래키를 설정해 줄 수 있다.
<br><br>

### Difference between HasOne And BelongsTo
HasOne inserts the association Key in target, whereas belongsTo inserts association key in the source model
<br><br>

### `One-To-Many Associations`
`1:N` 관계를 지정해주는 메소드이다.
<br>
`hasMany()` 메소드를 이용해 `1:N` 관계를 지정해 줄 수 있다.

```js
db.user.hasMany(db.book, { foreignKey: 'user_id' });
db.book.belongsTo(db.user)
```
<br><br>

### `belongs-To-Many Associations`
`N:M` 관계를 정의하기 위해선 `belongsToMany()`를 사용한다.

```js
  db.Posts.belongsToMany(db.User, {through: 'Like', as: 'Likers'});
```
기본적으로 `PostsUser`라는 테이블이 생성되는데 
<br>
`through`로 테이블의 이름을 정해 줄 수 있다.
<br>
`as`옵션은 연결 관계에서 사용할 별칭을 설정한다.
<br>


<br><br>

## Sequelize Sync + nodemon
기본적으로 Sequelize models를 작성했다면 backend서버를 실행할때 sequelize를 연결해 보자.
```js
const db = require('./models');
db.sequelize.sync()
  .then(() => {
    console.log('db 연결 성공');
  })
  .catch(console.error);
```
```
npx sequelize db:create
```

<br>
<br>
<br>