module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.STRING, //标题
    password: DataTypes.STRING,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {
    tableName: 'user', // this will define the table's name
    timestamps: true, // this will deactivate the timestamp columns

  });

}
