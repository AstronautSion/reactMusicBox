# React LifeCycle

## **`[ 컴포넌트가 처음 실행되는 Mount 관련 api ]`**
<br>

### **`constrouctor(props)`**

컴포넌트가 새로 만들어질 때 마다 호출. 프로젝트 구동시 여러 이벤트로 인해 한 컴포넌트가 여러번 생성되고 삭제됨을 반복하기도 하는데 새로 생성될 때 마다 constructor가 실행된다.

<br>

### **`render()`**
컴포넌트를 DOM에 부착하는 함수.

<br>

## **`*componentDidMount`**
가상 DOM에서 실제 DOM으로 반영된 이후에 실행된다. 주로 실제 dom을 사용해야 하는 외부 라이브러리를 사용할 때나 네트워크 자원을 요청하는 로직을 수행한다.
<br><br><br>

## **`[ Update 관련 api ]`**
<br>

컴포넌트는 부모로부터 `Props` 가 변경되거나, 자신의 `State`가 변경될 때 업데이트 된다.


<br><br>

### **`static getDerivedStateFromProps(nextProps, prevState)`**

~~~js
static getDerivedStateFromProps(nextProps, prevState) {
  // 여기서는 setState 를 하는 것이 아니라
  // 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로 사용됩니다.
  if (nextProps.value !== prevState.value) {
    return { value: nextProps.value };
  }
  return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미
}
~~~
state 가 props 에 따라 변해야 하는 로직을 작성하는 것. 추가적으로 static 메서드이기 때문에 this를 사용할 수 없다. 따라서 this.setState()가 아닌 object형태로 return 값을 넘겨야 한다. 이 것은 setState와 정확히 같은 방식으로 동작한다.

<br><br>

### **`shouldComponentUpdate(nextProps, nextState): boolean`**

return으로 true 또는 false를 해줘야 한다.<br> 
false를 리턴하게 되면, rendering하지 않는다. 랜더링 하지 않는 다는 것은, render()함수가 호출되지 않는 다는 것이고,<br> 
그 것은 가상 DOM에 어떤 작업도 하지 않는 다는 것이므로 성능 최적화를 할 수 있다.<br> 
Props나 State가 변경되어서 컴포넌트가 update될 때, 무조건적인 rendering을 하지 말고 필요없는 redering은 하지 말자.

<br><br>

## **`*componentDidUpdate(prevProps, prevState, snapshot)`**
`componentDidUpdate()`는 갱신이 일어난 직후에 호출. 이 메서드는 최초 렌더링에서는 호출되지 않는다.
```js
componentDidUpdate(prevProps) {
  // 전형적인 사용 사례 (props 비교를 잊지 마세요)
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```
`componentDidUpdate()`에서 `setState()`를 즉시 호출할 수도 있지만, 위의 예시처럼 조건문으로 감싸지 않으면 무한 반복이 발생할 수 있다. <br>
또한 추가적인 렌더링을 유발하여, 비록 사용자는 눈치채지 못할지라도 컴포넌트 성능에 영향을 미칠 수 있다. <br>
상위에서 내려온 prop을 그대로 state에 저장하는 것은 좋지 않으며, 그 대신 prop을 직접 사용하는 것이 좋다. <br>

<br>

`componentDidUpdate()`는 `shouldComponentUpdate()`가 false를 반환하면 호출되지 않는다.

<br><br>

### **`getSnapshotBeforeUpdate(prevProps, prevState)`**
`getSnapshotBeforeUpdate()`는 가장 마지막으로 렌더링된 결과가 DOM 등에 반영되었을 때에 호출된다. <br>
이 메서드를 사용하면 컴포넌트가 DOM으로부터 스크롤 위치 등과 같은 정보를 이후 변경되기 전에 얻을 수 있다.<br>
이 생명주기가 반환하는 값은 `componentDidUpdate()`에 인자로 전달됩니다.

<br><br>

## **`*componentWillUnmount()`**
 컴포넌트가 마운트 해제되어 제거되기 직전에 호출된다. <br>
 이 메서드 내에서 타이머 제거, 네트워크 요청 취소, `componentDidMount()` 내에서 생성된 구독 해제 등 필요한 모든 정리 작업을 수행.


<br><br><br><br>
# React SSR 과 Next

### 전통적인 SSR
<br>

~~~json
브라우저 ==> 프론트서버 ==> 백앤드서버 ==> 프론트서버 ==> 브라우저
~~~
<br>

### React에서의 SSR 과 CSR
<br>
처음 브라우저 접속시에만 SSR방식을 으로 데이터를 가져온다. { 이유: 검색엔진이 해당페이지의 정보를 파악하지 못하기 때문 }
<br>
그 후엔 백엔드 서버에서 바로 데이터를 가져오는 CSR방식을 따른다.
<br>

~~~json
브라우저 ==> 백엔드서버 ==> 브라우저
~~~
<br>

### NEXT를 사용하는 이유

대부분의 사이트는 검색엔진에 노출이 되어야 하고
사용자를 대상으로하는 사이트(B2C)는 속도도 빨라야 하기때문에 SSR과 Code Splitting을 고려해야한다.

SSR과 Code Splitting이 꼭 NEXT를 사용해야만 하는것은 아니지만 NEXT를 사용하면 편리하게 구현할 수 있다.
<br><br>

### NEXT를 사용안해도 되는 경우
대표적으로 어드민 사이트 같은경우는 검색엔진에 노출될 필요가 없으며 관리자들은 조금 불편하겠지만 사용자들이 이용하지 않기 때문에 굳이 NEXT를 사용하지 않아도 된다.

<br><br><br>

# styled-components

```
npm i --save styled-components
npm i babel-plugin-styled-components
```


루스에 `.babelrc` 파일을 추가

```js
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "babel-plugin-styled-components",
      { "fileName": true, "displayName": true, "pure": true }
    ]
  ]
}
```
바벨 플러그인 설정은 배열로 담아 [0]인덱스에는 플러그인명, [1]인덱스에는 옵션을 위치시킨다.

- `fileName`: 코드가 포함된 파일명을 알려줌
- `displayName` : 클래스명에 해당 스타일 정보 추가
- `pure` : 사용하지 않은 속성 제거


<br><br><br>
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
db.Music = require('./music')(sequelize, Sequelize);
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
    db.User.hasMay(db.Music);
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