module.exports = (sequelize, DataTypes) => {
  const Music = sequelize.define('Music', {
    title: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    musicId: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Music.associate = (db) => {
    db.Music.belongsTo(db.User);
    db.Music.hasOne(db.Image);
  };

  return Music;
}