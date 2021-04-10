module.exports = (sequelize, DataTypes) => {
  const Video = sequelize.define('Video', {
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    videoId: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    duration: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
  });
  Video.associate = (db) => {
    db.Video.belongsTo(db.User);
    
  };

  return Video;
}