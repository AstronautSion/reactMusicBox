module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    age: {
      type: DataTypes.INTEGER(2),
      allowNull: true,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: true,
    },
    oauthId: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    types: {
      type: DataTypes.STRING(10),
      allowNull: true,
    }

  },{
    charset: 'utf8',
    collate: 'utf8_general_ci',
  });
  User.associate = (db) => {
    db.User.hasMany(db.Video);
    db.User.hasOne(db.Image);
  };

  return User;
}