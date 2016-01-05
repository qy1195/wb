module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    username: DataTypes.TEXT, //标题
    password: DataTypes.TEXT,
    gender: DataTypes.INTEGER,
    age: DataTypes.INTEGER
  }, {
    tableName: 'login', // this will define the table's name
    timestamps: true, // this will deactivate the timestamp columns

  });

}
