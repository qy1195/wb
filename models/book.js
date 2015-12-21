module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING,
    info: DataTypes.STRING

  }, {
    tableName: 'book',
    timestamps: true
  });
}
