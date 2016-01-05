module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.TEXT, //标题
    tag: DataTypes.TEXT,
    author: DataTypes.TEXT,
    article: DataTypes.TEXT,
    picUrl: DataTypes.TEXT,
    type: DataTypes.INTEGER
  }, {
    tableName: 'item', // this will define the table's name
    timestamps: true, // this will deactivate the timestamp columns
    associate: function(models) {
      Item.hasMany(models.Answer)
    }

  });
return Item;
}
